'use client';

import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { authenticatedPaths } from '@/lib/constants';
import { Div } from '@/wrappers/HTMLWrappers';
import { useParams, usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: Props) {
  const pathname = usePathname();
  const { id: channelId } = useParams();

  if (![...authenticatedPaths, `/channels/${channelId}`].includes(pathname)) return <Div>{children}</Div>;

  return (
    <Div>
      <AppHeader />
      <ApplyShadCnBackground>{children}</ApplyShadCnBackground>
    </Div>
  );
}
