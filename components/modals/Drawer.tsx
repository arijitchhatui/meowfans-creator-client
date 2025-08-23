import { LucideIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => unknown;
  title?: string;
  description?: string;
  triggerText?: string;
  triggerIcon?: { icon?: LucideIcon };
}

export const ExtendedDrawer: React.FC<Props> = ({
  isOpen,
  children,
  onClose,
  title = 'Edit profile',
  description = 'Make changes to your profile here. Click save when you\'re done.',
  triggerText = 'Edit profile',
  triggerIcon
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  useEffect(() => setOpen(isOpen), [isOpen]);

  const handleClose = () => {
    onClose?.();
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={handleClose}>
      <DrawerTrigger asChild className="flex flex-row">
        <Button variant="outline">
          {triggerIcon?.icon && React.createElement(triggerIcon.icon)}
          {triggerText}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
