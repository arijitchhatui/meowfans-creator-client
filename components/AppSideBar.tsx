'use client';
import { ChartLine, CircleDollarSign, CircleUserRound, CreditCard, GalleryVerticalEnd, Home, Inbox, Mails, Settings } from 'lucide-react';

import { Div, Span } from '@/app/wrappers/HTMLWrappers';
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
  { icon: GalleryVerticalEnd, title: 'Assets', path: '/assets' },
  { icon: CircleDollarSign, title: 'Subscriptions', path: '/subscriptions' },
  { icon: CreditCard, title: ' Add card', path: '/billing' },
  { icon: CircleUserRound, title: 'My profile', path: `/${AppConfig.title}` },
  { icon: Settings, title: 'More', path: '/more' },
  { icon: ChartLine, title: 'Analytics', path: '/analytics' }
];

export const AppSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  if (!authenticatedPaths.includes(pathname)) return null;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MEOW</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appSideBarButtonOptions.map((item) => (
                <SidebarMenuItem key={item.title} className='rounded-2xl'>
                  <SidebarMenuButton
                    className={`${pathname === item.path && 'bg-blue-200'}`}
                    asChild
                    onClick={() => router.push(item.path)}
                  >
                    <Div className="flex flex-row">
                      <item.icon />
                      <Span>{item.title}</Span>
                    </Div>
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
