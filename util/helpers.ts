import { authCookieKey, authRefreshCookieKey } from '@/lib/constants';
import { getCookie } from 'cookies-next';
import { configService } from './config';

export const isValidEmail = (email: string) => {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 8;
};

export const BearerAccessToken = () => {
  return `Bearer ${getCookie(authCookieKey)}`;
};

export const BearerRefreshToken = () => {
  return `Bearer ${getCookie(authRefreshCookieKey)}`;
};

export const buildSafeUrl = (input: { host: string; pathname?: string }) => {
  try {
    const redirectUrl = new URL(input.host);
    redirectUrl.pathname = input.pathname || '/';
    return redirectUrl.toString();
  } catch {
    console.log('Failed to create url!');
    return configService.NEXT_PUBLIC_CREATOR_URL;
  }
};

export type buttonSize = 'default' | 'lg' | 'sm' | 'icon';
export type buttonVariant = 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null;
