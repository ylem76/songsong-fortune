import { ILJU_60 } from './ilju.constants';
import type { Ilju } from './ilju.types';

// 기준: 1990-05-16 = 신사
const ANCHOR_DATE_UTC = Date.UTC(1990, 4, 16);
const ANCHOR_INDEX = ILJU_60.indexOf('신사');

export function calculateIlju(year: number, month: number, day: number): Ilju {
  const targetDateUTC = Date.UTC(year, month - 1, day);
  const msPerDay = 24 * 60 * 60 * 1000;

  const diffDays = Math.floor((targetDateUTC - ANCHOR_DATE_UTC) / msPerDay);

  const index = (((ANCHOR_INDEX + diffDays) % 60) + 60) % 60;

  return ILJU_60[index];
}
