'use client';

import { InputWithLabel } from '@/components/ui/inputWithLabel';
import Status from './Status';
import { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { useForm } from '../hooks/useForm';
import Form from './Form';

export default function FormStatus() {
  const imageSize = 360;
  const { form } = useForm();

  const ref = useRef<HTMLDivElement>(null);

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
        count={form.numberOfStatus}
        imageSize={imageSize}
        status={form.status}
        innerRef={ref}
        lastStatusPosition={form.currentStatus}
      />
      <button
        onClick={onButtonClick}
        className="px-4 py-2 rounded-md bg-slate-200 text-slate-900"
      >
        Download
      </button>
    </>
  );
}
