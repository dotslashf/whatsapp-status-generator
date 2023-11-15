import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from './textarea';
import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputWithLabelProps {
  id: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  isLabelHidden?: boolean;
}
export function InputWithLabel(props: Readonly<InputWithLabelProps>) {
  return (
    <div className="flex items-center w-full">
      {props.icon && props.icon}
      <div
        className={clsx('grid items-center w-full gap-y-2', props.className)}
      >
        {!props.isLabelHidden && <Label htmlFor={props.id}>{props.name}</Label>}
        {props.type === 'textarea' ? (
          <Textarea
            id={props.id}
            onChange={props.onChange as any}
            value={props.value}
            className="bg-white"
            rows={4}
          />
        ) : (
          <Input
            type={props.type ? props.type : 'text'}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className={clsx('bg-white', props.className)}
            onKeyDown={props.onKeyDown}
          />
        )}
      </div>
    </div>
  );
}
