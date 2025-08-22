import { Icons } from '@/lib/icons/svg-icons';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Div } from '@/app/wrappers/HTMLWrappers';

export const LandingPageHeader = () => {
  return (
    <Div className='flex flex-row justify-between content-center items-center border-4 bg-gradient-to-bl '>
      <Div className="flex flex-row items-center justify-center content-center">
        <Button variant={'outline'}>
          <Menu />
        </Button>
        <Div className="animate-pulse cursor-pointer">{Icons.appIcon()}</Div>
      </Div>
      <Div className="flex flex-row justify-between items-center space-x-3 ">
        <Div className="">
          <Button variant={'outline'}>LOGIN</Button>
        </Div>
        <Div className="font-bold">
          <Button variant={'default'}>SIGNUP</Button>
        </Div>
      </Div>
    </Div>
  );
};
