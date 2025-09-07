'use client';

import { AppHeader } from '@/components/AppHeader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { Info } from './components/Info';

const FanProfile = () => {
  return (
    <PageWrapper>
      <AppHeader applyDarkMode applyBackground />
      <ScrollArea className="flex w-full">
        <Div className="flex flex-col gap-6 p-4 max-w-5xl mx-auto">
          <Div className="flex flex-row justify-between">
            <Info />
          </Div>
        </Div>
      </ScrollArea>
    </PageWrapper>
  );
};

export default FanProfile;
