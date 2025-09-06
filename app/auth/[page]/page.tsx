'use client';

import { Card, CardContent } from '@/components/ui/card';
import { RetroGrid } from '@/components/ui/shadcn-io/retro-grid';
import { AppSizes, AuthPaths } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { Div } from '@/wrappers/HTMLWrappers';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const Login = dynamic(() => import('@/app/auth/components/Login'), { ssr: false });
const Footer = dynamic(() => import('@/app/auth/components/Footer'), { ssr: false });
const Signup = dynamic(() => import('@/app/auth/components/Signup'), { ssr: false });
const ForgotPassword = dynamic(() => import('@/app/auth/components/ForgotPassword'), { ssr: false });
const CreatorSignup = dynamic(() => import('@/app/auth/components/CreatorSignup'), { ssr: false });

export default function Auth() {
  const pathname = usePathname();
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
                      return <Signup />;

                    case AuthPaths.LOGIN:
                      return <Login />;

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
