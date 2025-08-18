'use client';
import { CircleDollarSign, CircleUserRound, CreditCard, Fence, Home, Inbox, Mails, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { AppConfig } from '@/lib/app.config';
import { authenticatedPaths } from '@/lib/constants';
import { usePathname, useRouter } from 'next/navigation';

const appSideBarButtonOptions = [
  { icon: Home, title: 'Home', path: '/home' },
  { icon: Inbox, title: 'Notifications', path: '/notifications' },
  { icon: Mails, title: 'Channels', path: '/channels' },
  { icon: Fence, title: 'Assets', path: '/assets' },
  { icon: CircleDollarSign, title: 'Subscriptions', path: '/subscriptions' },
  { icon: CreditCard, title: ' Add card', path: '/billing' },
  { icon: CircleUserRound, title: 'My profile', path: `/${AppConfig.title}` },
  { icon: Settings, title: 'More', path: '/more' }
];

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (!authenticatedPaths.includes(pathname)) return null;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MEOW</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appSideBarButtonOptions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={() => router.push(item.path)}>
                    <div className="flex flex-row">
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
