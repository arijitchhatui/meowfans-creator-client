import { Meteors } from '@/components/ui/shadcn-io/meteors';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

export const MeteorWrapper: React.FC<Props> = ({ children }) => {
  return (
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Meteors number={200} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  );
};

