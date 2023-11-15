'use client';

import Status from './Status';
import { useCallback, useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useForm } from '../hooks/useForm';
import Form from './Form';
import { Button } from '@/components/ui/button';
import { dateTimeRelevance } from '@/lib/utils';

export default function FormStatus() {
  const { form, setForm } = useForm();

  const ref = useRef<HTMLDivElement>(null);
  const date = dateTimeRelevance(form.date);

  useEffect(() => {
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
        link.download = `${new Date().getTime()}.png`;
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
      <Form onButtonClick={onButtonClick} />
      {/* Status Preview */}
      <Status
        status={form.status}
        date={date}
        innerRef={ref}
        avatar={form.avatar}
        isSelfStatus={form.isSelfStatus}
      />
      <Button
        onClick={onButtonClick}
        variant={'brand'}
        className="lg:hidden"
        size={'xl'}
      >
        Download asd
      </Button>
    </>
  );
}
