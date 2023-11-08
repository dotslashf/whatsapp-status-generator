import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from './textarea';

interface InputWithLabelProps {
  id: string;
  type: string;
  name: string;
  value: any;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
}
export function InputWithLabel(props: Readonly<InputWithLabelProps>) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id}>{props.name}</Label>
      {props.type === 'textarea' ? (
        <Textarea
          id={props.id}
          onChange={props.onChange}
          value={props.value}
          className="bg-white"
        />
      ) : (
        <Input
          type={props.type ? props.type : 'text'}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          className="bg-white"
        />
      )}
    </div>
  );
}
