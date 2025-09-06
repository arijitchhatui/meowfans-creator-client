import {
  ChartLine,
  CircleDollarSign,
  CircleUserRound,
  CreditCard,
  GalleryVerticalEnd,
  Home,
  Inbox,
  LucideIcon,
  Mails,
  Settings
} from 'lucide-react';
import { AppConfig } from './app.config';

export const authenticatedPaths = ['/home', '/notifications', '/assets', '/channels', '/analytics', '/profile'];

export interface HeaderProps {
  variant?: 'outline' | 'default';
  title?: string;
  icon?: LucideIcon;
  onClick?: () => unknown;
  path?: string;
}

export enum ShadCnBackgrounds {
  WAVY = 'WAVY',
  FLICKERING = 'FLICKERING',
  RETRO = 'RETRO',
  WARP = 'WARP',
  BOX = 'BOX',
  FIBER_WAVES = 'FIVER_WAVES',
  VORTEX = 'VORTEX',
  SQUARES_BACKGROUND = 'SQUARES_BACKGROUND',
  GALAXY = 'GALAXY',
  METEOR= 'METEOR'
}

export enum BgColor {
  BLACK = '#000',
  WHITE = '#fff'
}

export const tailwindBgColors = [
  'bg-slate-500',
  'bg-gray-500',
  'bg-zinc-500',
  'bg-neutral-500',
  'bg-stone-500',
  'bg-red-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-green-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-sky-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-purple-500',
  'bg-fuchsia-500',
  'bg-pink-500',
  'bg-rose-500'
];

export const appBottomNavButtonOptions = [
  { icon: Home, title: 'Home', path: '/home' },
  { icon: Mails, title: 'Channels', path: '/channels' },
  { icon: ChartLine, title: 'Analytics', path: '/analytics' },
  { icon: GalleryVerticalEnd, title: 'Assets', path: '/assets' },
  { icon: CircleDollarSign, title: 'Subscriptions', path: '/subscriptions' },
  { icon: CircleUserRound, title: 'My profile', path: `/${AppConfig.title}` }
];

export const appSideBarButtonOptions = [
  { icon: Home, title: 'Home', path: '/home' },
  { icon: Inbox, title: 'Notifications', path: '/notifications' },
  { icon: Mails, title: 'Messages', path: '/channels' },
  { icon: GalleryVerticalEnd, title: 'Assets', path: '/assets' },
  { icon: CircleDollarSign, title: 'Subscriptions', path: '/subscriptions' },
  { icon: CreditCard, title: ' Add card', path: '/billing' },
  { icon: CircleUserRound, title: 'My profile', path: `/profile` },
  { icon: Settings, title: 'More', path: '/more' },
  { icon: ChartLine, title: 'Analytics', path: '/analytics' }
];

export const THEME = '_theme';

export enum AppSizes {
  ICON_1024 = '1024',
  ICON_512 = '512',
  ICON_384 = '384',
  ICON_256 = '256',
  ICON_196 = '196',
  ICON_144 = '144',
  ICON_96 = '96',
  ICON_72 = '72',
  ICON_48 = '48',
  ICON_36 = '36'
}

export enum AuthPaths {
  SIGNUP = '/auth/signup',
  LOGIN = '/auth/login',
  CREATOR_SIGNUP = '/auth/creator-signup',
  FORGOT_PASSWORD = '/auth/forgot-password',
  GOOGLE_LOGIN = '/auth/google',
  APPLE_LOGIN = '/auth/apple',
  META_LOGIN = '/auth/meta'
}
