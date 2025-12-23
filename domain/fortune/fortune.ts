import fortuneMapJson from './fortune.map.2026.json';
import fortuneMessageJson from './fortune.message.json';
import type { Ilju } from '../ilju/ilju.types';
import type { FortuneKind } from './fortune.types';

// 👇 핵심: JSON을 FortuneKind Record라고 단언
const fortuneMap = fortuneMapJson as Record<Ilju, FortuneKind>;

export function getFortuneByIlju(ilju: Ilju): FortuneKind {
  return fortuneMap[ilju];
}

export function getFortunMsgByIlju(ilju: Ilju): string {
  return fortuneMessageJson[ilju];
}
