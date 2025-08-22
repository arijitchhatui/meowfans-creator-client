'use client';
import { tailwindBgColors } from '@/lib/constants';
import { Div } from '@/wrappers/HTMLWrappers';
import { useEffect, useState } from 'react';

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  const [bg, setBg] = useState<string>('bg-white');
  const color = () => {
    const idx = Math.floor(Math.random() * 100);
    return tailwindBgColors[idx > 22 ? idx % 10 : idx];
  };
  console.log(color());
  useEffect(() => {
    const interval = setInterval(() => {
      setBg(color());
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Div className={`flex flex-col min-h-screen items-center justify-center p-6 md:p-1 `}>
      <Div className="w-full max-w-sm md:max-w-3xl">{children}</Div>
    </Div>
  );
}
