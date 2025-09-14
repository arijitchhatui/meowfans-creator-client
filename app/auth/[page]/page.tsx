'use client';

import { Card, CardContent } from '@/components/ui/card';
import { RetroGrid } from '@/components/ui/shadcn-io/retro-grid';
import useAPI from '@/hooks/api/useAPI';
import { LoginInput, SignupInput } from '@/hooks/types/auth';
import { AppSizes, AuthPaths } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { UserRoles } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent, Suspense, useState } from 'react';
import toast from 'react-hot-toast';

const Login = dynamic(() => import('@/app/auth/components/Login'), { ssr: false });
const Footer = dynamic(() => import('@/app/auth/components/Footer'), { ssr: false });
const Signup = dynamic(() => import('@/app/auth/components/Signup'), { ssr: false });
const ForgotPassword = dynamic(() => import('@/app/auth/components/ForgotPassword'), { ssr: false });
const CreatorSignup = dynamic(() => import('@/app/auth/components/CreatorSignup'), { ssr: false });

export default function Auth() {
  const pathname = usePathname();
  const { login, signup } = useAPI();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>, input: LoginInput) => {
    e.preventDefault();
    setLoading(true);
    if (!navigator.onLine) return toast.error('You are currently offline!');
    try {
      console.log(input);
      const { roles } = await login(input);

      const isCreator = roles.includes(UserRoles.Creator.toLowerCase());

      if (isCreator) return router.push('/home');

      toast.success('Logged in');
      return router.push('/analytics');
    } catch (error) {
      toast.error('Something wrong happened!');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>, input: SignupInput) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { roles } = await signup(input);

      const isCreator = roles.includes(UserRoles.Creator.toLowerCase());

      if (isCreator) return router.push('/analytics');
      toast.success('Logged in');
      return router.push('/home');
    } catch (error) {
      toast.error('Something wrong happened!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense>
      <Div className="flex flex-col justify-between h-full">
        <Div className="flex flex-row items-center justify-center overflow-hidden">
          <RetroGrid angle={45} cellSize={80} opacity={0.1} lightLineColor="#000000" darkLineColor="#ffffff" />
        </Div>
        <Div>
          <Div className="flex flex-col gap-6 overflow-hidden">
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                {(() => {
                  switch (pathname) {
                    case AuthPaths.SIGNUP:
                      return <Signup loading={loading} handleSignup={handleSignup} />;

                    case AuthPaths.LOGIN:
                      return <Login loading={loading} handleLogin={handleLogin} />;

                    case AuthPaths.FORGOT_PASSWORD:
                      return <ForgotPassword />;

                    case AuthPaths.CREATOR_SIGNUP:
                      return <CreatorSignup />;
                  }
                })()}
                <Div className="bg-muted relative hidden content-center md:block">{Icons.appIcon(AppSizes.ICON_384)}</Div>
              </CardContent>
            </Card>
          </Div>
        </Div>
        <Footer />
      </Div>
    </Suspense>
  );
}
