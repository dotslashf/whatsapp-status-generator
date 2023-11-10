import { useForm } from '@/app/hooks/useForm';
import { useEffect, useRef } from 'react';
import { Progress } from './progress';

export default function Bullets() {
  const { form, setForm } = useForm();
  const width = Math.floor(form.statusWidth / form.numberOfStatus);

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
    (i) => (
      <Progress
        key={i}
        className="h-1"
        style={{ width: `${width}px` }}
        value={
          i === form.currentStatus - 1
            ? form.statusPercentage
            : isLoading(i)
            ? 100
            : 0
        }
      />
    )
  );

  return (
    <div className="flex justify-center w-full px-2 pt-2 space-x-0.5" ref={ref}>
      {ArrayProgress}
    </div>
  );
}
