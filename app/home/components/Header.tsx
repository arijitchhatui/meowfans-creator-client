import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { House } from 'lucide-react';

export const HomeHeader = () => {
  return (
    <Div className="flex flex-row bg-gray-100 dark:bg-black w-full justify-between rounded-xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-xl md:text-2xl ml-3 flex flex-row items-center">
          <House />
          Home
        </Typography>
        <Typography className="font-bold text-xs md:text-xl ml-3.5">Discover new images and creators today.</Typography>
      </Div>
    </Div>
  );
};
