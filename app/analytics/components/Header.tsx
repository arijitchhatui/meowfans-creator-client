import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { ChartLine } from 'lucide-react';

export const AnalyticsHeader = () => {
  return (
    <Div className="flex flex-col w-full bg-gray-100 dark:bg-black justify-between rounded-2xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-xl md:text-2xl ml-3 flex flex-row items-center">
          <ChartLine />
          Analytics
        </Typography>
        <Typography className="font-bold text-xs md:text-xl ml-3.5">Discover your analytical views</Typography>
      </Div>
    </Div>
  );
};
