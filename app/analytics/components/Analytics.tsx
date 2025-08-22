'use client';

import { Div } from '@/app/wrappers/HTMLWrappers';
import { PageWrapper } from '@/app/wrappers/PageWrapper';
import { AppHeader } from '@/components/AppHeader';
import { AnalyticsEarnings } from './Earnings';
import { AnalyticsMessages } from './Messages';
import { AnalyticsPosts } from './Posts';
import { AnalyticsPostsInfo } from './PostsInfo';
import { AnalyticsPurchases } from './Purchases';
import { AnalyticsVisitor } from './Visitors';

export const Analytics = () => {
  return (
    <PageWrapper className="p-1 space-y-1">
      <AppHeader />
      <AnalyticsEarnings />
      <AnalyticsVisitor />
      <Div className="flex flex-col md:flex-row justify-around m-1 space-y-1">
        <AnalyticsPurchases />
        <AnalyticsPosts />
        <AnalyticsMessages />
      </Div>
      <AnalyticsPostsInfo />
    </PageWrapper>
  );
};
