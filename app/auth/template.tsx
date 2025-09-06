'use client';
import { Div } from '@/wrappers/HTMLWrappers';

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Div className={`flex flex-col min-h-screen items-center justify-center p-6 md:p-1`}>
      <Div className="w-full max-w-sm md:max-w-3xl">{children}</Div>
    </Div>
  );
}
