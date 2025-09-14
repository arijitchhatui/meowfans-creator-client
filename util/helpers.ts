import { authCookieKey, authRefreshCookieKey } from '@/lib/constants';
import { getCookie } from 'cookies-next';

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
