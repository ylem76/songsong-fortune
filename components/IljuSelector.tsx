'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { getFortuneByIlju, getFortunMsgByIlju } from '@/domain/fortune/fortune';
import { calculateIlju } from '@/domain/ilju/ilju.calculate';
import { useRouter } from 'next/navigation';
import { Ilju } from '@/domain/ilju/ilju.types';

import { yclover } from '@/app/fonts';
import clsx from 'clsx';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function IljuSelector({
  setIlju,
}: {
  setIlju: (ilju: Ilju) => void;
}) {
  const [year, setYear] = useState<number | ''>('');
  const [month, setMonth] = useState<number | ''>('');
  const [day, setDay] = useState<number | ''>('');

  const isValid = year && month && day;

  // 연도 범위 (예: 현재 기준 80년)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - i);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='min-h-screen w-full bg-white overflow-hidden'>
        {/* 전체 화면 컨테이너 */}
        <section className='relative min-h-screen w-full flex flex-col items-center px-8 pt-20 pb-12'>
          {/* 상단 장식 (체크 패턴 자리용) */}
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
          <h1
            className={clsx(
              yclover.className,
              'text-[72px] text-[#1F3C88] text-center leading-tight mb-4 mt-4'
            )}>
            2026 나의 <span className='font-bold'>대박운세</span>
          </h1>

          {/* 일러스트 + 말풍선 */}
          <div className='relative flex justify-center items-center m-8 mt-0 w-[570px] mb-0'>
            {/* 말풍선 */}
            <div
              className='
              absolute
              left-0
              bg-[#B9DDA3]
              rounded-full
              px-8
              py-4
              text-black
              leading-snug
              text-center
              w-[280px]
              h-[280px]
              flex
              justify-start
              items-center
              text-[30px]
              -rotate-12
              
            '>
              내 행운이
              <br />
              멈추지 않는
              <br />
              탓일까?
            </div>
            <img
              src='/images/intro.png'
              alt='클로버를 들고 있는 캐릭터 일러스트'
              className='w-[445px] h-auto relative rotate-2 right-0 left-auto ml-auto'
            />
          </div>

          {/* 입력 영역 */}
          <form
            className='w-full max-w-[720px] flex flex-col gap-8'
            onSubmit={(e) => e.preventDefault()}>
            <div className='flex flex-col gap-3'>
              <label className='text-[20px] text-gray-700'>생년월일</label>

              <div className='grid grid-cols-3 gap-6'>
                {/* 연도 */}
                <select
                  aria-label='출생 연도'
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className='
              h-20
              rounded-2xl
              border-2
              border-[#B9DDA3]
              px-6
              text-[24px]
              focus:outline-none
              focus:ring-4
              ring-2
              ring-[#B9DDA3]
              appearance-none
            '>
                  <option value=''>연도</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}년
                    </option>
                  ))}
                </select>

                {/* 월 */}
                <select
                  aria-label='출생 월'
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className='
              h-20
              rounded-2xl
              border-2
              ring-2
              border-[#B9DDA3]
              px-6
              text-[24px]
              focus:outline-none
              focus:ring-4
              ring-[#B9DDA3]
              appearance-none
            '>
                  <option value=''>월</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}월
                    </option>
                  ))}
                </select>

                {/* 일 */}
                <select
                  aria-label='출생 일'
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className='
              h-20
              rounded-2xl
              border-2
              border-[#B9DDA3]
              px-6
              text-[24px]
              focus:outline-none
              focus:ring-4
              ring-2
              ring-[#B9DDA3]
              appearance-none
            '>
                  <option value=''>일</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}일
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* CTA 버튼 */}
            <button
              type='button'
              disabled={!isValid}
              className='
          mt-6
          h-24
          rounded-2xl
          bg-[#E57368]
          text-white
          text-[28px]
          font-bold
          active:scale-[0.98]
          transition
          disabled:opacity-40
        '
              onClick={() => {
                if (!isValid) return;

                const ilju = calculateIlju(
                  year as number,
                  month as number,
                  day as number
                );
                setIlju(ilju);
              }}>
              운세보기
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
