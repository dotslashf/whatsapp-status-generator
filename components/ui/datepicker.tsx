'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useForm } from '@/app/hooks/useForm';
import { Input } from './input';

function CalendarIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-4 h-4 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      />
    </svg>
  );
}

export default function DatePicker() {
  const [date, setDate] = React.useState(new Date());
  const { form, setForm } = useForm();

  React.useEffect(() => {
    setForm({ ...form, date: date ?? new Date() });
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'white'}
          className={cn(
            'w-full justify-start text-left font-normal border',
            !date && 'text-muted-foreground'
          )}
        >
          {date ? (
            format(date, 'PPP', { locale: id })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onDayClick={setDate}
          initialFocus
        />
        <div className="p-2">
          <Input
            type="time"
            className="border focus-visible:ring-0"
            value={format(date, 'HH:mm')}
            onChange={(e) => {
              setDate(
                new Date(`${format(date, 'yyyy-MM-dd')} ${e.target.value}`)
              );
            }}
            suppressHydrationWarning
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
