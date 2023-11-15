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
        Download
      </Button>
    </>
  );
}
