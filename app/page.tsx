'use client';

import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { InputWithLabel } from '@/components/ui/inputWithLabel';
import { toPng } from 'html-to-image';

const Bullets = dynamic(() => import('@/components/ui/bullet'), { ssr: false });

export default function Home() {
  const imageSize = 360;
  const [count, setCount] = useState(4);
  const [status, setStatus] = useState<string>(
    'Cupidatat ullamco id mollit incididunt proident officia sint mollit id nisi. Ea nulla qui eiusmod velit enim do reprehenderit consequat. Eiusmod amet sit ex dolore sit reprehenderit velit reprehenderit reprehenderit. '
  );
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
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-200 w-full">
      <div className="max-w-md flex items-center flex-col justify-between py-4">
        <h1 className="font-bold text-lg">Bikin Status Palsu Whatsapp 🤓</h1>
        <InputWithLabel
          id="numberOfStatus"
          type="number"
          name="Jumlah Status: "
          placeholder="Masukkan Jumlah Status"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <InputWithLabel
          id="numberOfStatus"
          type="textarea"
          name="Status: "
          placeholder="Masukkan Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        {/* Status Preview */}
        <div
          className="flex flex-col bg-slate-700 w-width-status h-height-status relative text-xs text-white"
          ref={ref}
        >
          <Bullets count={count} imageSize={imageSize} />
          <div className="pl-2 pt-2 flex space-x-2 items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/38921923?v=4"
                className="rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span>anjimeNation</span>
              <span>Kemarin, 10 Jumat 2023</span>
            </div>
          </div>
          <div className="h-full w-full text-center flex items-center px-8 text-sm">
            <p className="w-full">{status}</p>
          </div>
          <div className="text-center pb-8 flex flex-col items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            <span>Bagikan</span>
          </div>
        </div>
        <button
          onClick={onButtonClick}
          className="bg-slate-200 py-2 px-4 rounded-md text-slate-900"
        >
          Download
        </button>
      </div>
    </main>
  );
}
