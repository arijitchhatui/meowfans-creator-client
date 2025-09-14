import { authCookieKey, authRefreshCookieKey, FetchMethods, UploadMediaInput } from '@/lib/constants';
import { configService } from '@/util/config';
import { getCookie, setCookie } from 'cookies-next';
import { LoginInput, SignupInput } from '../types/auth';

const fetchRequest = async (input: { init: RequestInit; fetchMethod: FetchMethods; pathName: string }) => {
  const { init, fetchMethod, pathName } = input;
  const url = new URL(configService.NEXT_PUBLIC_BASE_URL);
  url.pathname = pathName;
  const res = await fetch(url, {
    ...init,
    method: fetchMethod
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

const useAPI = () => {
  const login = async (input: LoginInput) => {
    const data = await fetchRequest({
      fetchMethod: FetchMethods.POST,
      pathName: '/auth/login',
      init: {
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });

    setCookie(authCookieKey, data.accessToken);
    setCookie(authRefreshCookieKey, data.refreshToken);
    return data;
  };

  const signup = async (input: SignupInput) => {
    const data = await fetchRequest({
      fetchMethod: FetchMethods.POST,
      pathName: '/auth/fan-signup',
      init: {
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
    setCookie(authCookieKey, data.accessToken);
    setCookie(authRefreshCookieKey, data.accessToken);
    return data;
  };

  const upload = async (input: UploadMediaInput) => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetchRequest({
      fetchMethod: FetchMethods.POST,
      pathName: '/assets/upload',
      init: {
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }
    });
  };

  return {
    login,
    signup,
    upload
  };
};

export default useAPI;
