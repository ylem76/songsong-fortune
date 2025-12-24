'use client';
import IljuResult from '@/components/IljuResult';
import IljuSelector from '@/components/IljuSelector';
import { Ilju } from '@/domain/ilju/ilju.types';
import { useState } from 'react';

export default function Home() {
  const [ilju, setIlju] = useState<Ilju | ''>('');

  return (
    <>
      {!ilju && <IljuSelector setIlju={setIlju} />}
      {ilju && <IljuResult ilju={ilju} setIlju={setIlju} />}
    </>
  );
}
