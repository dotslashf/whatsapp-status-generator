import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from './textarea';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';

interface InputWithLabelProps {
  id: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
export function InputWithLabel(props: Readonly<InputWithLabelProps>) {
  return (
    <div className="grid items-center w-full max-w-lg gap-y-2">
      <Label htmlFor={props.id}>{props.name}</Label>
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
          className="bg-white"
          onKeyDown={props.onKeyDown}
        />
      )}
    </div>
  );
}
