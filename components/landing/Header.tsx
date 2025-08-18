import { Icons } from '@/lib/icons/svg-icons';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

export const LandingPageHeader = () => {
  return (
    <div className='flex flex-row justify-between content-center items-center border-4 bg-gradient-to-bl '>
      <div className="flex flex-row items-center justify-center content-center">
        <Button variant={'outline'}>
          <Menu />
        </Button>
        <div className="animate-pulse cursor-pointer">{Icons.appIcon()}</div>
      </div>
      <div className="flex flex-row justify-between items-center space-x-3 ">
        <div className="">
          <Button variant={'outline'}>LOGIN</Button>
        </div>
        <div className="font-bold">
          <Button variant={'default'}>SIGNUP</Button>
        </div>
      </div>
    </div>
  );
};
