'use client';

import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { Div } from '@/wrappers/HTMLWrappers';

interface Props {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: Props) {
  return (
    <Div>
      <AppHeader applyBackground applyDarkMode />
      <ApplyShadCnBackground>{children}</ApplyShadCnBackground>
    </Div>
  );
}
