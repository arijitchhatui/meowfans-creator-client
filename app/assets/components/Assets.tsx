'use client';

import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { Footer } from '@/components/Footer';
import { Modal } from '@/components/modals/Modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useState } from 'react';
import { AssetsHeader } from './Header';
import { AssetsThread } from './Thread';

export const Assets = () => {
  const [openModal, setModalOpen] = useState<boolean | null>(null);
  const applyButtons = [
    { variant: 'outline' as const, title: 'Upload', onClick: () => setModalOpen(true) },
    { variant: 'outline' as const, title: 'Select' }
  ];

  return (
    <PageWrapper>
      <AppHeader applyButtons={applyButtons} applyBackground />
      <ApplyShadCnBackground>
        <AssetsHeader />
        <AssetsThread />
        <Footer />
        {openModal && (
          <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
            <form className="grid items-start gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" defaultValue="shadcn@example.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@shadcn" />
              </div>
              <Button type="submit">Save changes</Button>
            </form>
          </Modal>
        )}
      </ApplyShadCnBackground>
    </PageWrapper>
  );
};
