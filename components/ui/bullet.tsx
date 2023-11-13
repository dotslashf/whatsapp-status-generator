import { useForm } from '@/app/hooks/useForm';
import { useEffect, useRef } from 'react';
import { Progress } from './progress';

export default function Bullets() {
  const { form, setForm } = useForm();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setForm({
      ...form,
      statusWidth: ref.current?.offsetWidth ?? 500,
    });
  }, [ref.current?.offsetWidth]);

  const isLoading = (index: number) => {
    return index < form.currentStatus - 1;
  };

  const ArrayProgress = Array.from(Array(form.numberOfStatus).keys()).map(
    (i) => {
      let value = 0;

      if (i === form.currentStatus - 1) {
        value = form.statusPercentage;
      } else if (isLoading(i)) {
        value = 100;
      }

      return <Progress key={i} className="h-1" value={value} />;
    }
  );

  return (
    <div className="flex justify-center w-full px-2 pt-2 space-x-0.5" ref={ref}>
      {ArrayProgress}
    </div>
  );
}
