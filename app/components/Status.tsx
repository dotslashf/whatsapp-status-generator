import Bullets from '@/components/ui/bullet';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { useForm } from '../hooks/useForm';
import { dateTimeRelevance } from '@/lib/utils';
import clsx from 'clsx';

interface StatusProps {
  status: string;
  innerRef: React.RefObject<HTMLDivElement>;
  date: Date;
  avatar: string;
  isSelfStatus: boolean;
}
export default function Status(props: Readonly<StatusProps>) {
  const { form } = useForm();
  const currentDate = dateTimeRelevance(props.date);

  return (
    <div
      className="relative flex flex-col w-full h-full text-xs text-white rounded-md aspect-status"
      style={{ background: form.backgroundColor }}
      ref={props.innerRef}
    >
      <Bullets />
      <div className="flex items-center px-2 pt-2">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <Avatar className="mr-2">
          <AvatarImage
            src={props.avatar}
            className="object-cover object-center w-8 h-8 rounded-full aspect-square"
          />
          <AvatarFallback className="w-8 h-8">CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span>{form.name ? form.name : "Sample Name"}</span>
          <span>{currentDate}</span>
        </div>
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 h-6 ml-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex items-center w-full h-full px-8 text-sm text-center">
        <p
          className={clsx(
            'w-full',
            form.statusTextSize === 'small' && 'text-base',
            form.statusTextSize === 'default' && 'text-lg',
            form.statusTextSize === 'large' && 'text-xl'
          )}
          style={{ color: form.textColor }}
        >
          {props.status}
        </p>
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
        <span className="text-base">
          {props.isSelfStatus ? 'Bagikan' : 'Balas'}
        </span>
      </div>
    </div>
  );
}
