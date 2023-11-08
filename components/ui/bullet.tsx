'use client';

import { getPercentage, randomPositionStatus } from '@/lib/utils';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface BulletProps {
  width: number;
  lastStoryPosition: number;
  index: number;
}
function Bullet(props: Readonly<BulletProps>) {
  const active = props.index < props.lastStoryPosition;
  return (
    <div
      className={clsx(
        'h-1 mr-0.5 rounded-full',
        active ? 'bg-slate-400' : 'bg-slate-300',
        props.index
      )}
      style={{ width: `${props.width}px` }}
    ></div>
  );
}

interface BulletsProps {
  count: number;
  imageSize: number;
}
export default function Bullets(props: Readonly<BulletsProps>) {
  const lastStatusPosition = randomPositionStatus(props.count);
  const width = props.imageSize / props.count;

  const ArrayBullets = Array.from(Array(props.count).keys()).map((i) => (
    <Bullet
      key={i}
      width={width}
      index={i}
      lastStoryPosition={lastStatusPosition}
    />
  ));

  return <div className="flex w-width-status px-2 pt-2">{ArrayBullets}</div>;
}
