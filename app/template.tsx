'use client';

import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { Div } from '@/wrappers/HTMLWrappers';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: Props) {
  const pathname = usePathname();
  const notForThisPaths = ['/', '/auth', '/channels'];
  const isLandingPage = notForThisPaths.includes(pathname);
  if (isLandingPage) return <Div>{children}</Div>;
  return (
    <Div>
      <AppHeader />
      <ApplyShadCnBackground>{children}</ApplyShadCnBackground>
    </Div>
  );
}
