'use client';

import { Div } from '@/wrappers/HTMLWrappers';
import { LandingPageContent } from './landing/Content';
import { LandingPageFooter } from './landing/Footer';
import { LandingPageHeader } from './landing/Header';
import { LandingPagePricing } from './landing/Pricing';

export const LandingPage = () => {
  return (
    <Div className="flex flex-col min-h-screen">
      <LandingPageHeader />
      <LandingPageContent />
      <LandingPagePricing />
      <LandingPageFooter />
    </Div>
  );
};
