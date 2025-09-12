import { authCookieKey, refreshToken } from '@/lib/constants';
import { configService } from '@/util/config';
import { setCookie } from 'cookies-next';
import { LoginInput } from '../types/auth';

const useAPI = () => {
  const login = async (input: LoginInput) => {
    const res = await fetch(`${configService.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      body: JSON.stringify(input),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    setCookie(authCookieKey, data.accessToken);
    setCookie(refreshToken, data.refreshToken);
    return data;
  };

  return {
    login
  };
};

export default useAPI;
