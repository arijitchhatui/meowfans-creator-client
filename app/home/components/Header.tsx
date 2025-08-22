import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { House } from 'lucide-react';

export const HomeHeader = () => {
  return (
    <Div className="flex flex-col bg-gray-100 w-full justify-center items-center content-center text-center rounded-2xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-4xl ml-3 flex flex-row items-center">
          <House />
          Home
        </Typography>
        <Typography className="font-bold text-xl ml-3.5">Discover new images and creators today.</Typography>
      </Div>
    </Div>
  );
};
