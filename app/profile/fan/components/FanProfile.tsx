import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ProfileDescription } from './ProfileDescription';

export const FanProfile = () => {
  return (
    <PageWrapper>
      <ScrollArea className="flex w-full">
        <Div className="flex flex-col gap-6 p-4 max-w-5xl mx-auto">
          <Div className="flex flex-row justify-between">
            <ProfileDescription />
          </Div>
        </Div>
      </ScrollArea>
    </PageWrapper>
  );
};
