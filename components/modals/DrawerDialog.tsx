'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { Div } from '@/wrappers/HTMLWrappers';
import { LucideIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ExtendedDialog } from './Dialog';
import { ExtendedDrawer } from './Drawer';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => unknown;
  title?: string;
  description?: string;
  triggerText?: string;
  triggerIcon?: { icon: LucideIcon };
}

export const DrawerDialog: React.FC<Props> = ({ isOpen, onClose, children, title, description, triggerText, triggerIcon }) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  useEffect(() => setOpen(isOpen), [isOpen]);

  const handleClose = () => {
    onClose?.();
    setOpen(false);
  };
  const isDesktop = useIsMobile();

  if (!isDesktop) {
    return (
      <ExtendedDialog
        isOpen={open}
        onClose={handleClose}
        title={title}
        description={description}
        triggerIcon={triggerIcon}
        triggerText={triggerText}
      >
        {children}
      </ExtendedDialog>
    );
  }

  return (
    <ExtendedDrawer
      isOpen={open}
      onClose={handleClose}
      title={title}
      description={description}
      triggerIcon={triggerIcon}
      triggerText={triggerText}
    >
      <Div className='px-4'>{children}</Div>
    </ExtendedDrawer>
  );
};
