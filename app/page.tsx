'use client';

import { getFortuneByIlju } from '@/domain/fortune/fortune';
import { calculateIlju } from '@/domain/ilju/ilju.calculate';

export default function Home() {
  const sendMessage = async () => {
    const res = await fetch('/api/fortune', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        month: 5,
        day: 16,
        initials: 'ㅅㅎㅈ',
      }),
    });

    const data = await res.json();
    console.log(data.fortune);
  };

  const handleGetIlju = () => {
    const ilju = calculateIlju(1990, 5, 16);
    console.log(ilju);

    const fortune = getFortuneByIlju(ilju);
    console.log(fortune);
  };
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <button onClick={sendMessage}>test</button>
        <button onClick={handleGetIlju}>일주 테스트</button>
      </main>
    </div>
  );
}
