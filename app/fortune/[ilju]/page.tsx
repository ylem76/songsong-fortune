import {
  getFortuneByIlju,
  getFortunMsgByIlju,
  getFortuneImage,
} from '@/domain/fortune/fortune';
import { Ilju } from '@/domain/ilju/ilju.types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    ilju: string;
  };
};

export default async function ResultPage({ params }: Props) {
  const { ilju: encodedIlju } = await params;
  const ilju = decodeURIComponent(encodedIlju) as Ilju;

  if (!ilju) {
    notFound();
  }

  const fortune = getFortuneByIlju(ilju);
  const fortuneImg = getFortuneImage(fortune);
  const fortuneMessage = getFortunMsgByIlju(ilju);
  return (
    <main className='min-h-screen w-full bg-white overflow-hidden'>
      <section className='relative min-h-screen w-full flex flex-col items-center px-8 pt-20 pb-16'>
        {/* 상단 체크 패턴 영역 */}
        <div className='absolute top-0 left-0 w-full h-16 bg-[#B9DDA3]' />
        <div className='absolute bottom-0 left-0 w-full h-16 bg-[#B9DDA3]' />

        {/* 타이틀 */}
        <header className='text-center mb-16'>
          <p className='text-[28px] text-[#1F3C88] mb-4'>{ilju} 일주의 당신</p>
          <h1 className='text-[64px] font-extrabold text-[#1F3C88] leading-tight'>
            2026 대박운세는?
          </h1>
        </header>

        {/* 중앙 비주얼 영역 */}
        <div className='relative w-full flex justify-center items-center mb-20'>
          {/* 부적 카드 */}
          <div className='relative'>
            <img
              src={fortuneImg}
              alt={fortune}
              className='w-[360px] h-auto rotate-[-6deg]'
            />
          </div>

          {/* 부스 안내 원형 배지 */}
          <div className='absolute right-[10%] top-1/2 -translate-y-1/2'>
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

          {/* 캐릭터 일러스트 */}
          <img
            src='/character-clover.png'
            alt='클로버를 들고 있는 캐릭터'
            className='absolute right-[6%] bottom-[-40px] w-[160px] h-auto'
          />
        </div>

        {/* 점괘 메시지 */}
        <div className='text-center max-w-[720px] mb-16'>
          <p className='text-[28px] leading-relaxed text-black'>
            {fortuneMessage}
          </p>
        </div>

        {/* 하단 액션 */}
        <footer className='flex items-center gap-12 text-[18px] text-gray-600'>
          <button className='flex items-center gap-2 hover:text-black transition'>
            <span>📣</span>
            친구에게 공유하기
          </button>
          <Link
            href='/'
            className='flex items-center gap-2 hover:text-black transition'>
            <span>↺</span>
            다시 해보기
          </Link>
        </footer>
      </section>
    </main>
  );
}
