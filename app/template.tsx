import { AppHeader } from '@/components/AppHeader';
import React from 'react';

export default function PageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
