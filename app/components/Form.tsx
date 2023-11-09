import { InputWithLabel } from '@/components/ui/inputWithLabel';
import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';
import { getRandomPositionStatus } from '@/lib/utils';

export default function Form() {
  const { form, setForm } = useForm();

  function onKeyDown(e) {
    if (e.keyCode === 40) {
      setForm({ ...form, statusPercentage: (form.statusPercentage -= 9) });
    } else if (e.keyCode === 38) {
      setForm({ ...form, statusPercentage: (form.statusPercentage += 9) });
    }
  }

  return (
    <div className="flex flex-col pb-4 space-y-4">
      <h1 className="text-lg font-bold">Bikin Status Palsu Whatsapp 🤓</h1>
      <InputWithLabel
        id="numberOfStatus"
        type="number"
        name="Jumlah Status: "
        placeholder="Masukkan Jumlah Status"
        value={form.numberOfStatus}
        onChange={(e) => {
          if (Number(e.target.value) < 1) {
            setForm({ ...form, numberOfStatus: 1 });
          } else {
            setForm({ ...form, numberOfStatus: Number(e.target.value) });
          }
        }}
      />
      <div className="flex space-x-4">
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
        <InputWithLabel
          id="statusPercentage"
          type="number"
          name="Persentase Status:"
          placeholder="Masukkan Persentase Status"
          value={form.statusPercentage}
          onChange={(e) => {
            if (Number(e.target.value) < 20) {
              setForm({ ...form, statusPercentage: 10 });
            } else if (Number(e.target.value) > 100) {
              setForm({ ...form, statusPercentage: 100 });
            } else {
              setForm({ ...form, statusPercentage: Number(e.target.value) });
            }
          }}
          onKeyDown={(e) => onKeyDown(e)}
        />
      </div>
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
    </div>
  );
}