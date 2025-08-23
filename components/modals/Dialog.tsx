import { LucideIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => unknown;
  title?: string;
  description?: string;
  triggerText?: string;
  triggerIcon?: { icon?: LucideIcon };
}

export const ExtendedDialog: React.FC<Props> = ({
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
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild className="flex flex-col">
        <Button variant="outline">
          {triggerIcon?.icon && React.createElement(triggerIcon.icon)}
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
