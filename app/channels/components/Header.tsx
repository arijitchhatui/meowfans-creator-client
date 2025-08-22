import { Div } from '@/app/wrappers/HTMLWrappers';
import { ReturnToPreviousPage } from '@/components/ReturnToPreviousPage';
import { Icons } from '@/lib/icons/svg-icons';

export const ChannelHeader = () => {
  return (
    <Div className="fixed top-0 left-0 md:left-64 md:right-64 right-0 flex flex-row bg-white items-center justify-between border-b bg-gradient-to-bl px-2 z-40 h-16">
      <Div className="flex flex-row items-center gap-2">
        <ReturnToPreviousPage />
        <Div className="animate-pulse cursor-pointer">{Icons.appIcon()}</Div>
      </Div>
      <Div className="flex flex-row items-center space-x-3"></Div>
    </Div>
  );
};
