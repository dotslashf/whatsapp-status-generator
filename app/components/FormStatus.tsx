'use client';

import Status from './Status';
import { useForm } from '../hooks/useForm';
import Form from './Form';
import { Button } from '@/components/ui/button';
import { dateTimeRelevance } from '@/lib/utils';
import { useToPng } from '@hugocxl/react-to-image';
import Link from 'next/link';
import { StarIcon } from './Icons';
import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';

export default function FormStatus() {
  const { form } = useForm();
  const date = dateTimeRelevance(form.date);
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const [stars, setStars] = useState(0);

  useEffect(() => {
    octokit
      .request('GET /repos/dotslashf/whatsapp-status-generator/stargazers')
      .then((res) => {
        setStars(res.data.length);
      });
  });

  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 1.0,
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = `${new Date().getTime()}.png`;
      link.href = data;
      link.click();
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
