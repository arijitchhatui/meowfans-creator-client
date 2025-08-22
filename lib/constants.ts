import { LucideIcon } from 'lucide-react';

export const authenticatedPaths = ['/home', '/notifications', '/assets', '/channels', '/analytics'];

export interface HeaderProps {
  variant?: 'outline' | 'default';
  title?: string;
  icon?: LucideIcon;
  onClick?: () => unknown;
  path?: string;
}
