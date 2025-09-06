'use client';

import { Icons } from '@/lib/icons/Icons';
import { Div, Span } from '@/wrappers/HTMLWrappers';
import { Button } from '../../../components/ui/button';

const OtherLogin = () => {
  return (
    <>
      <Div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <Span className="bg-card text-muted-foreground relative z-10 px-2">Or continue with</Span>
      </Div>
      <Div className="grid grid-cols-3 gap-4">
        <Button variant="outline" type="button" className="w-full">
          {Icons.appleIcon()}
          <Span className="sr-only">Login with Apple</Span>
        </Button>
        <Button variant="outline" type="button" className="w-full">
          {Icons.googleIcon()}
          <Span className="sr-only">Login with Google</Span>
        </Button>
        <Button variant="outline" type="button" className="w-full">
          {Icons.metaIcon()}
          <Span className="sr-only">Login with Meta</Span>
        </Button>
      </Div>
    </>
  );
};
export default OtherLogin;
