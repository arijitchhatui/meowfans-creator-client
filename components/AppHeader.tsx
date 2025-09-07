'use client';

import { useIsMobile } from '@/hooks/useMobile';
import { HeaderProps } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { Menu, Wallpaper } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ApplyTheme } from './ApplyTheme';
import { ApplyBackgroundModal } from './modals/ApplyBackgroundModal';
import { TriggerModal } from './modals/TriggerModal';
import { ReturnToPreviousPage } from './ReturnToPreviousPage';
import { Button } from './ui/button';
import { useSidebar } from './ui/sidebar';

interface Props {
  applyButtons?: HeaderProps[];
  header?: string;
  applyDarkMode?: boolean;
  applyBackground?: boolean;
}
export const AppHeader: React.FC<Props> = ({ applyButtons, header, applyDarkMode, applyBackground }) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { open, setOpen } = useSidebar();
  const [backgroundModalOpen, setBackgroundModalOpen] = useState<boolean>(false);

  const handleRouter = (path: string) => {
    router.push(path);
  };

  return (
    <Div
      className={`fixed z-50 top-0 left-0 ${
        open && 'md:left-64'
      } right-0 flex flex-row bg-white dark:bg-black items-center justify-between border-b bg-gradient-to-bl px-2  h-16`}
    >
      <Div className="flex flex-row items-center gap-2">
        {!open && !isMobile && (
          <Button onClick={() => setOpen(true)}>
            <Menu />
          </Button>
        )}
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
        {applyBackground && (
          <Div className="flex items-center space-x-2">
            <TriggerModal onChangeModalState={setBackgroundModalOpen} modalIcon={{ icon: Wallpaper }} />
          </Div>
        )}
        <ApplyBackgroundModal open={backgroundModalOpen} setOpen={setBackgroundModalOpen} />
      </Div>
    </Div>
  );
};
