import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { ActiveAccounts } from './components/ActiveAccounts';
import { Description } from './components/Description';
import { GrowthRate } from './components/GrowthRate';
import { NewCustomers } from './components/NewCustomers';
import { TotalRevenue } from './components/TotalRevenue';

const User = () => {
  return (
    <PageWrapper>
      <AppHeader applyDarkMode applyBackground />
      <ApplyShadCnBackground>
        <ScrollArea className="flex w-full rounded-md border">
          <Div className="flex flex-col md:flex-row gap-1 justify-between">
            <NewCustomers />
            <TotalRevenue />
            <GrowthRate />
            <ActiveAccounts />
          </Div>
          <Description />
        </ScrollArea>
      </ApplyShadCnBackground>
    </PageWrapper>
  );
};

export default User;
