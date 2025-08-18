'use client';

import { Footer } from '@/components/Footer';
import { HomeChip } from './Chip';
import { HomeFeed } from './Feed';
import { HomeHeader } from './Header';
import { HomeSubscription } from './Subscriptions';
import { HomeTrending } from './Trending';

const FOOTER_MESSAGE = 'Pay only for what you unlock. No monthly fee.';
export const Home = () => {
  return (
    <div className="w-full">
      <HomeHeader />
      <HomeChip />
      <HomeFeed />
      <HomeSubscription />
      <HomeTrending />
      <Footer buttonTitles={['Browse More']} footerMessage={FOOTER_MESSAGE} />
    </div>
  );
};
