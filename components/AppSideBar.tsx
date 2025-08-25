'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';
import { appSideBarButtonOptions, authenticatedPaths } from '@/lib/constants';
import { Div, Span } from '@/wrappers/HTMLWrappers';
import { X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';

export const AppSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setOpen } = useSidebar();
  const isNotChannelPath = !authenticatedPaths.includes(pathname);
  if (isNotChannelPath) return null;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-row justify-between">
            MEOW
            {isNotChannelPath && (
              <Button variant={'outline'} onClick={() => setOpen(false)}>
                <X />
              </Button>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appSideBarButtonOptions.map((item) => (
                <SidebarMenuItem key={item.title} className="rounded-2xl">
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
