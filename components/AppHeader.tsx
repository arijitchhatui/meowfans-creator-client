'use client';

import { HeaderProps } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { useRouter } from 'next/navigation';
import { ApplyTheme } from './ApplyTheme';
import { ReturnToPreviousPage } from './ReturnToPreviousPage';
import { Button } from './ui/button';

interface Props {
  applyButtons?: HeaderProps[];
  header?: string;
  applyDarkMode?: boolean;
}
export const AppHeader: React.FC<Props> = ({ applyButtons, header, applyDarkMode }) => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };

  return (
    <Div className="fixed z-50 top-0 left-0 md:left-64 right-0 flex flex-row bg-white dark:bg-black items-center justify-between border-b bg-gradient-to-bl px-2  h-16">
      <Div className="flex flex-row items-center gap-2">
        <ReturnToPreviousPage />
        <Div className="cursor-pointer">{Icons.appIcon()}</Div>
        <Typography className="font-semibold text-xl animate-pulse">{header}</Typography>
      </Div>
      <Div className="flex flex-row items-center space-x-3">
        {applyButtons?.map((button, idx) => (
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
        {applyDarkMode && (
          <Div className="flex items-center space-x-2">
            <ApplyTheme />
          </Div>
        )}
      </Div>
    </Div>
  );
};
