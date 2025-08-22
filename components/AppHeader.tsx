'use client';

import { Div, Typography } from '@/app/wrappers/HTMLWrappers';
import { HeaderProps } from '@/lib/constants';
import { Icons } from '@/lib/icons/svg-icons';
import { useRouter } from 'next/navigation';
import { ReturnToPreviousPage } from './ReturnToPreviousPage';
import { Button } from './ui/button';

interface Props {
  headerProps?: HeaderProps[];
  header?: string;
}

export const AppHeader: React.FC<Props> = ({ headerProps, header }) => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };

  return (
    <Div className="fixed top-0 left-0 md:left-64 right-0 flex flex-row bg-white items-center justify-between border-b bg-gradient-to-bl px-2 z-40 h-16">
      <Div className="flex flex-row items-center gap-2">
        <ReturnToPreviousPage />
        <Div className="animate-pulse cursor-pointer">{Icons.appIcon()}</Div>
        <Typography className='font-semibold text-xl animate-pulse'>{header}</Typography>
      </Div>
      <Div className="flex flex-row items-center space-x-3">
        {headerProps?.map((button, idx) => (
          <Button
            key={idx}
            variant={button.variant}
            size={'lg'}
            onClick={button.onClick ?? (() => button.path && handleRouter(button.path))}
            className="shadow-accent-foreground font-semibold"
          >
            {button.icon && <button.icon />}
            {button.title}
          </Button>
        ))}
      </Div>
    </Div>
  );
};
