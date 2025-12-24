'use client';

import { yclover } from '@/app/fonts';
import {
  getFortuneByIlju,
  getFortuneImage,
  getFortunMsgByIlju,
} from '@/domain/fortune/fortune';
import { Ilju } from '@/domain/ilju/ilju.types';
import clsx from 'clsx';
import { MegaphoneIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function IljuResult({
  ilju,
  setIlju,
}: {
  ilju: Ilju | '';
  setIlju: (ilju: Ilju | '') => void;
}) {
  if (ilju === '') return;
  const fortune = getFortuneByIlju(ilju);
  const fortuneImg = getFortuneImage(fortune);
  console.log('fortuneImg', fortuneImg);
  const fortuneMessage = getFortunMsgByIlju(ilju);
  return (
    <main className='min-h-screen w-full bg-white overflow-hidden'>
      <section className='relative min-h-screen w-full flex flex-col items-center px-8 pt-20 pb-16'>
        {/* 상단 체크 패턴 영역 */}
        <div
          className='absolute top-0 left-0 w-full h-16 bg-[#B9DDA3]'
          style={{
            backgroundImage: 'url(/bg_pattern.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
          }}></div>
        <div
          className='absolute bottom-0 left-0 w-full h-16 bg-[#B9DDA3]'
          style={{
            backgroundImage: 'url(/bg_pattern.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
          }}></div>

        {/* 타이틀 */}
        <header
          className={clsx('text-center mb-8 text-36px', yclover.className)}>
          <p className='text-[36px] text-[#1F3C88] mb-4'>{ilju} 일주의 당신</p>
          <h1 className='text-[36px] text-[#1F3C88] -mt-4'>
            2026 <span className='font-bold'>대박운세</span>는?
          </h1>
        </header>

        {/* 중앙 비주얼 영역 */}
        <div className='relative flex justify-center items-center mb-12 w-[540px]'>
          {/* 부스 안내 원형 배지 */}
          <div className='absolute right-0 top-1/2 -translate-y-1/2 rotate-12'>
            <div className='w-[220px] h-[220px] rounded-full bg-[#E57368] flex flex-col items-center justify-center text-white text-center'>
              <p className='text-[40px] font-extrabold leading-none'>R11</p>
              <p className='text-[18px] font-semibold mt-1'>송송문구</p>
              <p className='text-[16px] mt-4 leading-snug'>
                실물 부적
                <br />
                받아가세요
              </p>
            </div>
          </div>

          {/* 부적 카드 */}
          <div className='relative mr-auto ml-0'>
            <img
              src={fortuneImg}
              alt={fortune}
              className='w-[290px] h-auto rotate-[-6deg]'
            />
          </div>
        </div>

        {/* 점괘 메시지 */}
        <div className='text-center max-w-[720px] mb-16'>
          <p className='text-[28px] leading-tight text-black whitespace-pre-wrap'>
            {fortuneMessage}
          </p>
        </div>

        {/* 하단 액션 */}
        <footer className='flex items-center gap-12 text-[18px] text-gray-600 mb-5'>
          <button className='flex items-center gap-2 hover:text-black transition cursor-pointer'>
            <span className='block w-6'>
              <MegaphoneIcon />
            </span>
            친구에게 공유하기
          </button>
          <button
            onClick={() => {
              setIlju('');
            }}
            className='flex items-center gap-2 hover:text-black transition cursor-pointer'>
            <span className='block w-6'>
              <ArrowUturnLeftIcon />
            </span>
            다시 해보기
          </button>
        </footer>
      </section>
    </main>
  );
}
