import Bullets from '@/components/ui/bullet';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { useForm } from '../hooks/useForm';
import clsx from 'clsx';
import { use, useEffect, useRef } from 'react';
import {
  ChevronCompactUpIcon,
  ChevronLeftIcon,
  CircularDotIcon,
} from './Icons';

interface StatusProps {
  status: string;
  innerRef: React.RefObject<HTMLDivElement>;
  date: string;
  avatar: string;
  isSelfStatus: boolean;
}
export default function Status(props: Readonly<StatusProps>) {
  const { form } = useForm();
  const fontFamily = useRef(form.statusFontName);

  useEffect(() => {
    fontFamily.current = form.statusFontName;
  }, [form.statusFontName]);

  return (
    <div
      className="relative flex flex-col max-w-lg text-base text-white rounded-md aspect-status"
      style={{ background: form.backgroundColor }}
      ref={props.innerRef}
      suppressHydrationWarning
    >
      <Bullets />
      <div className="flex items-center px-2 pt-2">
        <ChevronLeftIcon className="w-8 h-8" />
        <Avatar className="mr-2">
          <AvatarImage
            src={props.avatar}
            className="object-cover object-center w-10 h-10 rounded-full aspect-square"
          />
          <AvatarFallback className="w-12 h-12">JK</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span>{form.name ? form.name : 'Sample Name'}</span>
          <span suppressHydrationWarning>{props.date}</span>
        </div>
        <CircularDotIcon className="w-8 h-8 ml-auto" />
      </div>
      <div className="flex items-center px-4 m-auto text-sm text-center">
        <p
          className={clsx(
            'whitespace-break-spaces text-center w-fit',
            form.statusTextSize === 'small' && 'text-lg',
            form.statusTextSize === 'default' && 'text-xl',
            form.statusTextSize === 'large' && 'text-2xl',
            form.statusFontName
          )}
          style={{ color: form.textColor }}
        >
          {props.status}
        </p>
      </div>
      <div className="flex flex-col items-center pb-8 text-center">
        <ChevronCompactUpIcon className="w-8 h-8" />
        <span>{props.isSelfStatus ? 'Bagikan' : 'Balas'}</span>
      </div>
    </div>
  );
}
