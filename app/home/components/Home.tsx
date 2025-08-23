'use client';

import { AppHeader } from '@/components/AppHeader';
import { Footer } from '@/components/Footer';
import { HeaderProps } from '@/lib/constants';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { Bell } from 'lucide-react';
import { HomeChip } from './Chip';
import { HomeFeed } from './Feed';
import { HomeHeader } from './Header';
import { HomeSubscription } from './Subscriptions';
import { HomeTrending } from './Trending';

const FOOTER_MESSAGE = 'Pay only for what you unlock. No monthly fee.';
const applyButtons: HeaderProps[] = [
  { variant: 'outline' as const, title: 'Upload' },
  { variant: 'outline' as const, icon: Bell, path: '/notifications' }
];

export const Home = () => {
  return (
    <PageWrapper>
      <AppHeader applyButtons={applyButtons} applySwitch={{ title: 'Dark mode' }} />
      <HomeHeader />
      <HomeChip />
      <HomeFeed />
      <HomeSubscription />
      <HomeTrending />
      <Footer message={FOOTER_MESSAGE} />
    </PageWrapper>
  );
};
