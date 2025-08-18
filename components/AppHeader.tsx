'use client';

import { Icons } from '@/lib/icons/svg-icons';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  buttonProps?: { variant?: 'outline' | 'default'; title: string }[];
}

export const AppHeader: React.FC<Props> = ({ buttonProps }) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 flex flex-row bg-white items-center justify-between border-b bg-gradient-to-bl px-2 z-40 h-16">
      <div className="flex flex-row items-center gap-2">
        <Button variant={'outline'} size={'lg'}>
          <Menu />
        </Button>
        <div className="animate-pulse cursor-pointer">{Icons.appIcon()}</div>
      </div>
      <div className="flex flex-row items-center space-x-3">
        {buttonProps?.map((button, idx) => (
          <Button
            key={idx}
            variant={button.variant}
            size={'lg'}
            className="shadow-accent-foreground font-semibold hover:text-white hover:bg-blue-400"
          >
            {button.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
