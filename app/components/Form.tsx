import { InputWithLabel } from '@/components/ui/inputWithLabel';
import { useForm } from '../hooks/useForm';
import { Separator } from '@/components/ui/separator';
import DatePicker from '@/components/ui/datepicker';
import ColorPicker from '@/components/ui/colorpicker';
import SelectDropdown from './Select';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function Form() {
  const { form, setForm } = useForm();

  return (
    <div className="flex flex-col w-full pb-4 space-y-3">
      <h1 className="text-lg font-bold text-center">
        Bikin Status Palsu Whatsapp 🤓
      </h1>
      <InputWithLabel
        id="name"
        type="text"
        name="Nama: "
        placeholder="Masukkan Nama"
        value={form.name}
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
      />
      <Separator className="border border-slate-300 opacity-60" />
      <InputWithLabel
        id="status"
        type="textarea"
        name="Status: "
        placeholder="Masukkan Status"
        value={form.status}
        onChange={(e) => {
          setForm({ ...form, status: e.target.value });
        }}
      />
      <DatePicker />
      <SelectDropdown />
      <Separator className="border border-slate-300 opacity-60" />
      <div className="flex justify-between space-x-4">
        <InputWithLabel
          id="avatar"
          type="file"
          name="Avatar: "
          value={''}
          className="w-2/3"
          onChange={(e) => {
            if (e.target.files) {
              setForm({
                ...form,
                avatar: URL.createObjectURL(e.target.files[0]),
              });
            }
          }}
        />
        <div className="flex flex-col items-start justify-center w-1/3 space-y-2">
          <Label htmlFor="statusFor">Status Sendiri?</Label>
          <Switch
            id="statusFor"
            checked={form.isSelfStatus}
            onCheckedChange={(e) =>
              setForm({
                ...form,
                isSelfStatus: e,
              })
            }
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <InputWithLabel
          id="numberOfStatus"
          type="number"
          name="Jumlah Status: "
          placeholder="Masukkan Jumlah Status"
          value={form.numberOfStatus}
          onChange={(e) => {
            if (Number(e.target.value) < 0 || e.target.value === '') {
              setForm({ ...form, numberOfStatus: 1 });
            } else if (Number(e.target.value) < form.currentStatus) {
              setForm({ ...form, numberOfStatus: form.currentStatus });
            } else {
              setForm({ ...form, numberOfStatus: Number(e.target.value) });
            }
          }}
        />
        <InputWithLabel
          id="lastStatus"
          type="number"
          name="Status Saat Ini: "
          placeholder="Masukkan Posisi Status Ini"
          value={form.currentStatus}
          onChange={(e) => {
            if (Number(e.target.value) < 1) {
              setForm({ ...form, currentStatus: 1 });
            } else if (Number(e.target.value) > form.numberOfStatus) {
              setForm({ ...form, currentStatus: form.numberOfStatus });
            } else {
              setForm({ ...form, currentStatus: Number(e.target.value) });
            }
          }}
        />
        <div className="grid items-center w-full max-w-lg gap-y-2">
          <Label htmlFor="statusPercentage">Persentase Status:</Label>
          <div className="flex w-full gap-x-2">
            <Input
              value={form.statusPercentage}
              readOnly={true}
              className="text-center bg-white w-14 disabled:cursor-not-allowed"
            />
            <Slider
              defaultValue={[form.statusPercentage]}
              max={100}
              step={10}
              min={10}
              onValueChange={(value) => {
                setForm({ ...form, statusPercentage: value[0] });
              }}
              id="statusPercentage"
              className="w-full "
            />
          </div>
        </div>
      </div>
      <Separator className="border border-slate-300 opacity-60" />
      <div className="flex space-x-4">
        <ColorPicker
          id="backgroundColor"
          name="Warna Latar Belakang:"
          value={form.backgroundColor}
          gradient={true}
          onChange={(e) => {
            setForm({ ...form, backgroundColor: e.target.value });
          }}
        />
        <ColorPicker
          id="textColor"
          name="Warna Teks:"
          value={form.textColor}
          gradient={false}
          onChange={(e) => {
            setForm({ ...form, textColor: e.target.value });
          }}
        />
      </div>
      <Separator className="border border-slate-300 opacity-60" />
    </div>
  );
}
