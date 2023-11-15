'use client';

import Status from './Status';
import { useCallback, useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useForm } from '../hooks/useForm';
import Form from './Form';
import { Button } from '@/components/ui/button';
import { dateTimeRelevance } from '@/lib/utils';
import { useToPng } from '@hugocxl/react-to-image';

export default function FormStatus() {
  const { form, setForm } = useForm();
  const date = dateTimeRelevance(form.date);

  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 1.0,
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = `${new Date().getTime()}.png`;
      link.href = data;
      link.click();
    },
  });

  useEffect(() => {
    setForm({
      ...form,
      statusWidth: ref.current?.offsetWidth ?? 500,
    });
  }, [ref.current?.offsetWidth]);

  // const onButtonClick = useCallback(() => {
  //   if (ref.current === null) {
  //     return;
  //   }

  //   toPng(ref.current, { cacheBust: true })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a');
  //       link.download = `${new Date().getTime()}.png`;
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [ref]);

  return (
    <>
      {/* Form */}
      <Form onButtonClick={convert} />
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
        Download asd
      </Button>
    </>
  );
}
