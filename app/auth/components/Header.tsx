import { ReturnToPreviousPage } from '@/components/ReturnToPreviousPage';
import { AuthPaths } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { Div, H1, Typography } from '@/wrappers/HTMLWrappers';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  switch (pathname) {
    case AuthPaths.LOGIN:
      return (
        <Div className="flex flex-col">
          <Div className="flex flex-row justify-between">
            <ReturnToPreviousPage className="md:hidden" />
            <Div>{Icons.appIcon()}</Div>
          </Div>
          <Div className="flex flex-col items-center text-center">
            <H1 className="text-2xl font-bold">Welcome back</H1>
            <Typography className="text-muted-foreground text-balance">Login to your Meow account</Typography>
          </Div>
        </Div>
      );

    case AuthPaths.SIGNUP:
      return (
        <Div className="flex flex-col">
          <Div className="flex flex-row justify-between">
            <ReturnToPreviousPage className="md:hidden" />
            <Div>{Icons.appIcon()}</Div>
          </Div>
          <Div className="flex flex-col items-center text-center">
            <H1 className="text-2xl font-bold">Hi new user!</H1>
            <Typography className="text-muted-foreground text-balance">Start creating your meow account</Typography>
          </Div>
        </Div>
      );

    case AuthPaths.FORGOT_PASSWORD:
      return (
        <Div className="flex flex-col">
          <Div className="flex flex-row justify-between">
            <ReturnToPreviousPage className="md:hidden" />
            <Div>{Icons.appIcon()}</Div>
          </Div>
          <Div className="flex flex-col items-center text-center">
            <H1 className="text-2xl font-bold">Forgot your password!</H1>
            <Typography className="text-muted-foreground text-balance text-xs">
              Please enter the email you&apos;d like your password reset information sent to
            </Typography>
          </Div>
        </Div>
      );

    case AuthPaths.CREATOR_SIGNUP:
      return (
        <Div className="flex flex-col">
          <Div className="flex flex-row justify-between">
            <ReturnToPreviousPage className="md:hidden" />
            <Div>{Icons.appIcon()}</Div>
          </Div>
          <Div className="flex flex-col items-center text-center">
            <H1 className="text-2xl font-bold">Start your journey being a creator!</H1>
            <Typography className="text-muted-foreground text-balance">Join the meow community</Typography>
          </Div>
        </Div>
      );
  }
};
