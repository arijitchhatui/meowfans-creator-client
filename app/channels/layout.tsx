'use client';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { authenticatedPaths } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ChannelListBar } from './components/ChannelListBar';
import { demoChannels } from './components/Channels';

interface Props {
  children: React.ReactNode;
}
// /^\/channel$/ for channel only
const ChannelPageLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isChannelPath = authenticatedPaths.includes(pathname);
  return (
    <>
      <SidebarProvider>
        <SidebarInset>{children}</SidebarInset>
        <ChannelListBar side={isChannelPath ? 'right' : 'left'} channels={demoChannels} />
      </SidebarProvider>
    </>
  );
};

export default ChannelPageLayout;
