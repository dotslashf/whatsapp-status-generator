import { type ClassValue, clsx } from "clsx"
import { format, formatDistance, formatRelative, intervalToDuration } from 'date-fns'
import { id } from 'date-fns/locale'
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomPositionStatus(length: number) {
  const rand = Math.floor(Math.random() * length)
  if (rand === 0) {
    return 1
  } else if (rand < 1) {
    return getRandomPositionStatus(length)
  } else {
    return rand
  }
}

export function getPercentage(value: number, total: number) {
  return Math.round(value * (total / 100))
}

export function dateTimeRelevance(targetDate: Date) {
  const intervalDate = intervalToDuration({
    start: new Date(),
    end: targetDate,
  });

  return intervalDate.days ?? 2 > 2
    ? format(targetDate, "MMM dd yyyy HH:mm", { locale: id })
    : formatDistance(targetDate, new Date(), { locale: id, addSuffix: true });
}
