import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { Apple } from 'lucide-react';

export const NoChatSelected = () => {
  return (
    <Div className="w-full h-full items-center justify-center flex align-middle">
      <Div className="w-full max-w-sm flex flex-col items-center justify-center break-normal">
        <Typography className="text-center tracking-tight text-lg animate-pulse">Select a channel to start messaging</Typography>
        <Apple />
      </Div>
    </Div>
  );
};
