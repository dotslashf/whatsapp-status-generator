'use client';

import Status from './Status';
import { useForm } from '../hooks/useForm';
import Form from './Form';
import { Button } from '@/components/ui/button';
import { dateTimeRelevance } from '@/lib/utils';
import { useToCanvas, useToPng, useToSvg } from '@hugocxl/react-to-image';
import Link from 'next/link';
import { StarIcon } from './Icons';
import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';

export default function FormStatus() {
  const { form, setForm } = useForm();
  const date = dateTimeRelevance(form.date);
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const [stars, setStars] = useState(0);
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    octokit
      .request('GET /repos/dotslashf/whatsapp-status-generator/stargazers')
      .then((res) => {
        setStars(res.data.length);
      });
  });

  function dataURLtoBlob(dataURL: string) {
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const arr = new Uint8Array(raw.length);

    for (let i = 0; i < raw.length; i++) {
      arr[i] = raw.charCodeAt(i);
    }

    return new Blob([arr], { type: contentType });
  }

  const [_, convert, ref] = useToSvg<HTMLDivElement>({
    onSuccess: async (data) => {
      console.log(data);
    },
  });

  return (
    <>
      {/* Form */}
      <Form onButtonClick={convert} stars={stars} />
      {/* Status Preview */}
      <Status
        status={form.status}
        date={date}
        innerRef={ref}
        avatar={form.avatar}
        isSelfStatus={form.isSelfStatus}
      />
      <Button
        onClick={convert}
        variant={'brand'}
        className="lg:hidden"
        size={'xl'}
      >
        Download
      </Button>
      {/* <div className="hidden" id="canvas"> */}
      <div
      // dangerouslySetInnerHTML={{
      //   __html: atob(svgString.split(',')[1] ?? ''),
      // }}
      />
      {/* </div> */}
      {/* <Button
        onClick={convertToCanvas}
        variant={'brand'}
        className="lg:hidden"
        size={'xl'}
      >
        Download
      </Button> */}
      <Link
        href={'https://github.com/dotslashf/whatsapp-status-generator'}
        className="flex items-center justify-center h-10 px-8 space-x-4 text-sm font-medium transition-colors bg-yellow-400 border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-yellow-500 hover:text-accent-foreground lg:hidden"
        target="_blank"
      >
        <StarIcon className="w-4 h-4 mr-2" /> Stars {stars}
      </Link>
    </>
  );
}
