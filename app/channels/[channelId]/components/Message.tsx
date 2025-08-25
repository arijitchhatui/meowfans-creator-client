import { PageWrapper } from '@/wrappers/PageWrapper';
import { MessageHeader } from './Header';
import { MessageInput } from './Input';

export const Message = () => {
  return (
    <PageWrapper>
      <MessageHeader />
      <MessageInput />
    </PageWrapper>
  );
};
