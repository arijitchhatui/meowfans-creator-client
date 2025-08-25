import { ApplyTheme } from '@/components/ApplyTheme';
import { ApplyChannelBackground } from '@/components/modals/ApplyChannelBackground';
import { Modal } from '@/components/modals/Modal';
import { TriggerModal } from '@/components/modals/TriggerModal';
import { ReturnToPreviousPage } from '@/components/ReturnToPreviousPage';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { ShadCnBackgrounds } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { Div } from '@/wrappers/HTMLWrappers';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  setAnimatedBg: React.Dispatch<React.SetStateAction<ShadCnBackgrounds | null>>;
}

export const ChannelHeader: React.FC<Props> = ({ setAnimatedBg }) => {
  const [modalOpen, setModalOpen] = useState<boolean | null>(null);
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
        <TriggerModal onChangeModalState={setModalOpen} modalIcon={{ icon: Menu }} />
        <ApplyTheme />
      </Div>
      <Modal isOpen={!!modalOpen} onClose={() => setModalOpen(false)} title="Change background">
        <ApplyChannelBackground setAnimatedBg={setAnimatedBg} setModalOpen={setModalOpen} />
      </Modal>
    </Div>
  );
};
