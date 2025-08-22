import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';
import { ChannelListBar } from './components/ChannelListBar';
import { demoChannels } from './components/Channels';

interface Props {
  children: React.ReactNode;
}

const ChannelPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <SidebarInset>{children}</SidebarInset>
        <ChannelListBar side='right' channels={demoChannels}/>
      </SidebarProvider>
    </>
  );
};

export default ChannelPageLayout;
