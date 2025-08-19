'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { AppConfig } from '@/lib/app.config';
import { CircleDollarSign, CircleUserRound, GalleryVerticalEnd, Home, Mails } from 'lucide-react';
import { Button } from './ui/button';

const appSideBarButtonOptions = [
  { icon: Home, title: 'Home', path: '/home' },
  { icon: Mails, title: 'Channels', path: '/channels' },
  { icon: GalleryVerticalEnd, title: 'Assets', path: '/assets' },
  { icon: CircleDollarSign, title: 'Subscriptions', path: '/subscriptions' },
  { icon: CircleUserRound, title: 'My profile', path: `/${AppConfig.title}` }
];

export const AppBottomNav = () => {
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  return (
    <div className="w-full bg-white rounded-2xl fixed bottom-0 h-16">
      <div className="flex flex-row justify-between items-center content-center p-1">
        {appSideBarButtonOptions.map((button, idx) => (
          <Button key={idx} className="flex flex-col items-center content-center rounded-xl shadow-accent-foreground" variant={"outline"}>
            <button.icon />
          </Button>
        ))}
      </div>
    </div>
  );
};
