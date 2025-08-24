import { ReturnToPreviousPage } from '@/components/ReturnToPreviousPage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RetroGrid } from '@/components/ui/shadcn-io/retro-grid';
import { AppSizes } from '@/lib/constants';
import { Icons } from '@/lib/icons/Icons';
import { Anchor, Div, Form, H1, Span, Typography } from '@/wrappers/HTMLWrappers';

export const LoginForm = () => {
  return (
    <Div className="flex flex-col gap-6 overflow-hidden">
      <div className="flex flex-row items-center justify-center overflow-hidden">
        <RetroGrid angle={45} cellSize={80} opacity={0.1} lightLineColor="#000000" darkLineColor="#ffffff" />
      </div>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form className="p-6 md:p-8">
            <Div className="flex flex-col gap-6">
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
              <Div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required autoComplete="email" />
              </Div>
              <Div className="grid gap-3">
                <Div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Anchor href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </Anchor>
                </Div>
                <Input id="password" type="password" required autoComplete="password" />
              </Div>
              <Button type="submit" className="w-full">
                Login
              </Button>
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
              <Div className="text-center text-sm flex flex-col">
                Don&apos;t have an account?{' '}
                <Anchor href="#" className="underline underline-offset-4">
                  Sign up
                </Anchor>
              </Div>
            </Div>
          </Form>
          <Div className="bg-muted relative hidden content-center md:block">{Icons.appIcon(AppSizes.ICON_384)}</Div>
        </CardContent>
      </Card>
      <Div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Anchor href="#">Terms of Service</Anchor> and <Anchor href="#">Privacy Policy</Anchor>.
      </Div>
    </Div>
  );
};
