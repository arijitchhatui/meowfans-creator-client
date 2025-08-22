'use client';

import { PageWrapper } from '@/app/wrappers/PageWrapper';
import { AppHeader } from '@/components/AppHeader';
import { Footer } from '@/components/Footer';
import { HeaderProps } from '@/lib/constants';
import { Bell } from 'lucide-react';
import { HomeChip } from './Chip';
import { HomeFeed } from './Feed';
import { HomeHeader } from './Header';
import { HomeSubscription } from './Subscriptions';
import { HomeTrending } from './Trending';

const FOOTER_MESSAGE = 'Pay only for what you unlock. No monthly fee.';
const headerProps: HeaderProps[] = [
  { variant: 'outline' as const, title: 'Upload' },
  { variant: 'outline' as const, icon: Bell, path: '/notifications' }
];

export const Home = () => {
  return (
    <PageWrapper>
      <AppHeader headerProps={headerProps} />
      <HomeHeader />
      <HomeChip />
      <HomeFeed />
      <HomeSubscription />
      <HomeTrending />
      <Footer message={FOOTER_MESSAGE} />
    </PageWrapper>
  );
};
