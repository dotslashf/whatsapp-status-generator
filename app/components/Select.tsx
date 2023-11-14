import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from '../hooks/useForm';

interface SelectOption {
  value: string;
  label: string;
}
interface SelectDropdownProps {
  options: SelectOption[];
  placeholder: string;
  id: string;
}
export default function SelectDropdown(props: Readonly<SelectDropdownProps>) {
  const { form, setForm } = useForm();

  return (
    <Select
      onValueChange={(e) => {
        setForm({ ...form, [props.id]: e });
        console.log(props.id, e);
      }}
      defaultValue={form[props.id as keyof typeof form].toString()}
    >
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        {props.options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
