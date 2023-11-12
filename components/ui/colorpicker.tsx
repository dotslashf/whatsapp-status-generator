import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ReactGPicker from 'react-gcolor-picker';

interface ColorPickerProps {
  id: string;
  name: string;
  value: any;
  gradient: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorPicker(props: Readonly<ColorPickerProps>) {
  const handleChange = (newColor: string) => {
    const event = {
      target: {
        value: newColor,
        name: props.name,
        id: props.id,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    props.onChange(event);
  };

  return (
    <div className="grid items-center w-full max-w-lg gap-y-2">
      <Label htmlFor={props.id}>{props.name}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={`w-full justify-start text-left font-normal`}
            style={{ background: props.value }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <ReactGPicker
            value="color"
            onChange={handleChange}
            debounceMS={0}
            showInputs={false}
            showAlpha={false}
            defaultActiveTab={"solid"}
            gradient={props.gradient}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
export { ColorPicker };
