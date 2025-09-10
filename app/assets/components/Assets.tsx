'use client';

import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { Footer } from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { AssetsHeader } from './Header';
import { AssetsThread } from './Thread';

export const Assets = () => {
  return (
    <PageWrapper>
      <AssetsHeader />
      <Separator />
      <ApplyShadCnBackground>
        <AssetsThread />
        <Footer />
      </ApplyShadCnBackground>
    </PageWrapper>
  );
};
