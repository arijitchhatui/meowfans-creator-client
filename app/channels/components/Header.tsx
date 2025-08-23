import { Background } from '@/components/ApplyShadcnBackground';
import { ApplyTheme } from '@/components/ApplyTheme';
import { DrawerDialog } from '@/components/modals/DrawerDialog';
import { ReturnToPreviousPage } from '@/components/ReturnToPreviousPage';
import { Button } from '@/components/ui/button';
import { Icons } from '@/lib/icons/svg-icons';
import { Div } from '@/wrappers/HTMLWrappers';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  setAnimatedBg: React.Dispatch<React.SetStateAction<Background | null>>;
}

const backgrounds = [
  { label: 'Flickering grid', type: Background.FLICKERING },
  { label: 'Warp background', type: Background.WARP },
  { label: 'Retro background', type: Background.RETRO },
  { label: 'Box background', type: Background.BOX },
  { label: 'Default', type: null }
];

export const ChannelHeader: React.FC<Props> = ({ setAnimatedBg }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Div className="fixed top-0 left-0 md:left-64 md:right-64 right-0 flex flex-row bg-white dark:bg-black items-center justify-between border-b bg-gradient-to-bl px-2 z-40 h-16">
      <Div className="flex flex-row items-center gap-2">
        <ReturnToPreviousPage />
        <Div className="animate-pulse cursor-pointer">{Icons.appIcon()}</Div>
      </Div>
      <Div className="flex flex-row items-center space-x-3">
        <Button variant={'outline'} onClick={() => setModalOpen(true)}>
          <Menu />
        </Button>
        <ApplyTheme />
      </Div>
      {modalOpen && (
        <DrawerDialog isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Change background">
          <Div className="flex flex-col space-y-3">
            {backgrounds.map((bg, idx) => (
              <Button
                key={idx}
                variant={'outline'}
                onClick={() => {
                  setAnimatedBg(bg.type);
                  setModalOpen(false);
                }}
              >
                {bg.label}
              </Button>
            ))}
          </Div>
        </DrawerDialog>
      )}
    </Div>
  );
};
