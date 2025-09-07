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
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { MotionPresets } from '@/lib/MotionPresets';

export const AppSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setOpen } = useSidebar();
  const { id } = useParams();
  const isNotAuthenticated = !authenticatedPaths.includes(pathname) && !pathname.startsWith('/channels');
  if (isNotAuthenticated) return null;

  const _pathname = pathname === `/channels/${id}` ? '/channels/' : pathname;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-row justify-between">
            MEOW
            {isNotAuthenticated && (
              <Button variant={'outline'} onClick={() => setOpen(false)}>
                <X />
              </Button>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appSideBarButtonOptions.map((item) => (
                <SidebarMenuItem key={item.title} className="rounded-2xl">
                  <MotionPresets motionType="SlideRightToLeft">
                    <SidebarMenuButton
                      className={`${_pathname === item.path && 'bg-blue-200'}`}
                      asChild
                      onClick={() => router.push(item.path)}
                    >
                      <Div className="flex flex-row">
                        <item.icon />
                        <Span>{item.title}</Span>
                      </Div>
                    </SidebarMenuButton>
                  </MotionPresets>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
