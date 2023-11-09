import { useForm } from '@/app/hooks/useForm';
import { getPercentage, getRandomPositionStatus } from '@/lib/utils';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface BulletProps {
  width: number;
  lastStoryPosition: number;
  index: number;
}
function BulletBackground(props: Readonly<BulletProps>) {
  return (
    <div
      className={clsx('h-1 mr-0.5 rounded-full bg-slate-400')}
      style={{ width: `${props.width}px` }}
    ></div>
  );
}
function BulletActive(props: Readonly<BulletProps>) {
  const { form } = useForm();
  const percentage = getPercentage(props.width, form.statusPercentage);
  const leftPercentage = getPercentage(
    props.width,
    100 - form.statusPercentage
  );
  return props.index === props.lastStoryPosition - 1 ? (
    <div className="inline-flex">
      <div
        className={clsx(
          'h-1 rounded-l-full',
          'bg-slate-100 opacity-80',
          form.statusPercentage === 100 && 'rounded-r-full'
        )}
        style={{ width: `${percentage}px` }}
      ></div>
      <div
        className={clsx('h-1 mr-0.5 rounded-r-full', 'bg-slate-400')}
        style={{ width: `${leftPercentage}px` }}
      ></div>
    </div>
  ) : (
    <div
      className={clsx('h-1 mr-0.5 rounded-full', 'bg-slate-100 opacity-80')}
      style={{ width: `${props.width}px` }}
    ></div>
  );
}

interface BulletsProps {
  count: number;
  imageSize: number;
}
export default function Bullets(props: Readonly<BulletsProps>) {
  const { form } = useForm();
  const width = props.imageSize / props.count;

  const ArrayBulletsBackground = Array.from(
    Array(props.count - form.currentStatus).keys()
  ).map((i) => (
    <BulletBackground
      key={i}
      width={width}
      index={i}
      lastStoryPosition={form.currentStatus}
    />
  ));
  const ArrayBulletsActive = Array.from(Array(form.currentStatus).keys()).map(
    (i) => (
      <BulletActive
        key={i}
        width={width}
        index={i}
        lastStoryPosition={form.currentStatus}
      />
    )
  );

  return (
    <div className="flex px-2 pt-2 w-width-status">
      {ArrayBulletsActive}
      {ArrayBulletsBackground}
    </div>
  );
}
