'use client';

import Status from './Status';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useForm } from '../hooks/useForm';
import Form from './Form';
import { Button } from '@/components/ui/button';

export default function FormStatus() {
  const { form, setForm } = useForm();

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setForm({
      ...form,
      statusWidth: ref.current?.offsetWidth ?? 500,
    });
  }, [ref.current?.offsetWidth]);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      {/* Form */}
      <Form />
      {/* Status Preview */}
      <Status
        status={form.status}
        date={form.date}
        innerRef={ref}
        avatar={form.avatar}
      />
      <Button onClick={onButtonClick} variant={'default'} className="mt-4">
        Download
      </Button>
    </>
  );
}
