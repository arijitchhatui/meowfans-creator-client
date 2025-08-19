'use client';

import { AppHeader } from '@/components/AppHeader';
import { DrawerDialog } from '@/components/DrawerDialog';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { AssetsHeader } from './Header';
import { AssetsThread } from './Thread';

export const Assets = () => {
  const [uploadDrawer, setUploadDrawer] = useState<boolean | null>(null);
  const headerProps = [
    { variant: 'outline' as const, title: 'Upload', onClick: () => setUploadDrawer(true) },
    { variant: 'outline' as const, title: 'Select' }
  ];

  return (
    <div className="w-full">
      <AppHeader headerProps={headerProps} />
      <AssetsHeader />
      <AssetsThread />
      <Footer />
      {uploadDrawer && <DrawerDialog isOpen={uploadDrawer} onClose={() => setUploadDrawer(false)} />}
    </div>
  );
};
