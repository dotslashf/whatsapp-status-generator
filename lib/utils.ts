import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomPositionStatus(length: number) {
  const rand = Math.floor(Math.random() * length)
  if (rand === 0) {
    return 1
  } else if (rand < 1) {
    return randomPositionStatus(length)
  } else {
    return rand
  }
}

export function getPercentage(value: number, total: number) {
  return Math.round(value * (total / 100))
}
