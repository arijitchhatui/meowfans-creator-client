import { Header } from '@/app/auth/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoginInput } from '@/hooks/types/auth';
import { isValidEmail, isValidPassword } from '@/util/helpers';
import { Div, Form } from '@/wrappers/HTMLWrappers';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import OtherLogin from './OtherLogin';

interface Props {
  handleLogin: (e: FormEvent<HTMLFormElement>, input: LoginInput) => unknown;
  loading: boolean;
}

const LoginForm: React.FC<Props> = ({ handleLogin, loading }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    setDisabled(!email || !password || !isValidEmail(email) || !isValidPassword(password));
  }, [email, password]);

  return (
    <Form className="p-6 md:p-8" onSubmit={(e) => handleLogin(e, { email, password })}>
      <Div className="flex flex-col gap-6">
        <Header />
        <Div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Div>
        <Div className="grid gap-3">
          <Div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="/auth/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
              Forgot your password?
            </Link>
          </Div>
          <Input
            id="password"
            type="password"
            placeholder="******"
            required
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Div>
        <Button disabled={disabled} type="submit" className="w-full">
          {loading && <Loader2Icon className="animate-spin" />}
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
