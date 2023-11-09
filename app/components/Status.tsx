import Bullets from '@/components/ui/bullet';
import { getRandomPositionStatus } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { useEffect, useRef } from 'react';
import { useForm } from '../hooks/useForm';
import { get } from 'http';

interface StatusProps {
  count: number;
  imageSize: number;
  status: string;
  innerRef: React.RefObject<HTMLDivElement>;
  lastStatusPosition: number;
}
export default function Status(props: Readonly<StatusProps>) {
  const { form } = useForm();

  return (
    <div
      className="relative flex flex-col text-xs text-white bg-slate-600 w-width-status h-height-status"
      ref={props.innerRef}
    >
      <Bullets count={props.count} imageSize={props.imageSize} />
      <div className="flex items-center pt-2 pl-2 space-x-2">
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
      <div className="flex items-center w-full h-full px-8 text-sm text-center">
        <p className="w-full">{props.status}</p>
      </div>
      <div className="flex flex-col items-center pb-8 text-center">
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
  );
}
