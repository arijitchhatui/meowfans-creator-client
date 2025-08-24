'use client';

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
import { appSideBarButtonOptions, authenticatedPaths } from '@/lib/constants';
import { Div, Span } from '@/wrappers/HTMLWrappers';
import { usePathname, useRouter } from 'next/navigation';

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
