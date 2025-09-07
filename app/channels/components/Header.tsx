import { ApplyTheme } from '@/components/ApplyTheme';
import { ApplyBackgroundModal } from '@/components/modals/ApplyBackgroundModal';
import { TriggerModal } from '@/components/modals/TriggerModal';
import { ReturnToPreviousPage } from '@/components/ReturnToPreviousPage';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { Icons } from '@/lib/icons/Icons';
import { Div } from '@/wrappers/HTMLWrappers';
import { Menu, Wallpaper } from 'lucide-react';
import { useState } from 'react';

export const ChannelHeader = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setOpen, open } = useSidebar();
  return (
    <Div className="fixed top-0 left-0 md:left-[var(--sidebar-width)] md:right-[var(--sidebar-width)] right-0 flex flex-row bg-white dark:bg-black items-center justify-between border-b bg-gradient-to-bl px-2 z-40 h-16">
      <Div className="flex flex-row items-center gap-2">
        {!open && (
          <Button onClick={() => setOpen(true)}>
            <Menu />
          </Button>
        )}
        <ReturnToPreviousPage />
        <Div className="cursor-pointer">{Icons.appIcon()}</Div>
      </Div>
      <Div className="flex flex-row items-center space-x-3">
        <TriggerModal onChangeModalState={setModalOpen} modalIcon={{ icon: Wallpaper }} />
        <ApplyTheme />
      </Div>
      <ApplyBackgroundModal open={modalOpen} setOpen={setModalOpen} />
    </Div>
  );
};
