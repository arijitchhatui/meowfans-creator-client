'use client';

import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { AnalyticsEarnings } from './Earnings';
import { AnalyticsHeader } from './Header';
import { AnalyticsMessages } from './Messages';
import { AnalyticsPosts } from './Posts';
import { AnalyticsPostsInfo } from './PostsInfo';
import { AnalyticsPurchases } from './Purchases';
import { AnalyticsVisitor } from './Visitors';

export const Analytics = () => {
  return (
    <PageWrapper className="p-1 space-y-1">
      <AppHeader />
      <ApplyShadCnBackground>
        <AnalyticsHeader />
        <AnalyticsEarnings />
        <AnalyticsVisitor />
        <Div className="flex flex-col md:flex-row justify-around m-1 gap-1 space-y-1 w-full">
          <AnalyticsPurchases />
          <AnalyticsPosts />
        </Div>
        <AnalyticsMessages />
        <AnalyticsPostsInfo />
      </ApplyShadCnBackground>
    </PageWrapper>
  );
};
