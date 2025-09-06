import { Header } from '@/app/auth/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Div, Form } from '@/wrappers/HTMLWrappers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import OtherLogin from './OtherLogin';

const LoginForm = () => {
  const router = useRouter();
  return (
    <Form className="p-6 md:p-8">
      <Div className="flex flex-col gap-6">
        <Header />
        <Div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required autoComplete="email" />
        </Div>
        <Div className="grid gap-3">
          <Div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="/auth/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
              Forgot your password?
            </Link>
          </Div>
          <Input id="password" type="password" required autoComplete="password" />
        </Div>
        <Button
          type="submit"
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            router.push('/home');
          }}
        >
          Login
        </Button>
        <OtherLogin />
        <Div className="text-center text-sm flex flex-col">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </Div>
      </Div>
    </Form>
  );
};
export default LoginForm;
