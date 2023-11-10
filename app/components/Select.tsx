import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from '../hooks/useForm';

export default function SelectDropdown() {
  const { form, setForm } = useForm();

  return (
    <Select
      onValueChange={(e) => {
        setForm({ ...form, statusTextSize: e });
      }}
      defaultValue={form.statusTextSize}
    >
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder="Ukuran Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="small">Kecil</SelectItem>
        <SelectItem value="default">Sedang</SelectItem>
        <SelectItem value="large">Besar</SelectItem>
      </SelectContent>
    </Select>
  );
}
