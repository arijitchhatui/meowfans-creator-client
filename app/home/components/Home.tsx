'use client';

import { AppHeader } from '@/components/AppHeader';
import { Footer } from '@/components/Footer';
import { HomeChip } from './Chip';
import { HomeFeed } from './Feed';
import { HomeHeader } from './Header';
import { HomeSubscription } from './Subscriptions';
import { HomeTrending } from './Trending';

const FOOTER_MESSAGE = 'Pay only for what you unlock. No monthly fee.';
const headerProps = [{ variant: 'outline' as const, title: 'Upload' }];

export const Home = () => {
  return (
    <div className="w-full">
      <AppHeader headerProps={headerProps} />
      <HomeHeader />
      <HomeChip />
      <HomeFeed />
      <HomeSubscription />
      <HomeTrending />
      <Footer message={FOOTER_MESSAGE} />
    </div>
  );
};
