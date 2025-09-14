'use client';

import { Header } from '@/app/auth/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignupInput } from '@/hooks/types/auth';
import { isValidEmail, isValidPassword } from '@/util/helpers';
import { Div, Form } from '@/wrappers/HTMLWrappers';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import OtherLogin from './OtherLogin';

interface Props {
  handleSignup: (e: FormEvent<HTMLFormElement>, input: SignupInput) => unknown;
  loading: boolean;
}

const emptyInput = {
  email: '',
  fullName: '',
  password: ''
};

const SignupForm: React.FC<Props> = ({ handleSignup, loading }) => {
  const [input, setInput] = useState<SignupInput>(emptyInput);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('account');

  const handleChange = ({ key, value }: { key: string; value: string }) => {
    setInput({ ...input, [key]: value.trim() });
  };

  useEffect(() => {
    setDisabled(!input.email || !input.password || !input.fullName || !isValidEmail(input.email) || !isValidPassword(input.password));
  }, [input.email, input.password, input.fullName]);

  return (
    <Form className="p-6 md:p-8 flex flex-col" onSubmit={(e) => handleSignup(e, input)}>
      <Div className="flex flex-col gap-6">
        <Header />

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v)}>
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-1">
            <Div className="grid gap-3">
              <Label htmlFor="tabs-demo-fullname">Full name</Label>
              <Input
                id="tabs-demo-fullname"
                placeholder="Meow User"
                type="text"
                value={input.fullName}
                onChange={(e) =>
                  handleChange({
                    key: 'fullName',
                    value: e.target.value
                  })
                }
              />
            </Div>
            <Div className="grid gap-3">
              <Label htmlFor="tabs-demo-email">Email</Label>
              <Input
                id="tabs-demo-email"
                placeholder="meow@gmail.com"
                type="email"
                value={input.email}
                onChange={(e) =>
                  handleChange({
                    key: 'email',
                    value: e.target.value
                  })
                }
              />
            </Div>
            <Button type="button" className="w-full" onClick={() => setActiveTab('password')}>
              Next
            </Button>
          </TabsContent>

          <TabsContent value="password" className="space-y-1">
            <Div className="grid gap-3">
              <Label htmlFor="tabs-demo-password">Password</Label>
              <Input
                id="tabs-demo-password"
                type="password"
                required
                placeholder="password"
                autoComplete="password"
                value={input.password}
                onChange={(e) =>
                  handleChange({
                    key: 'password',
                    value: e.target.value
                  })
                }
              />
            </Div>
            <Button type="submit" className="w-full" disabled={disabled}>
              {loading && <Loader2Icon className="animate-spin" />}
              Signup
            </Button>
          </TabsContent>
        </Tabs>

        <OtherLogin />

        <Div className="text-center text-sm flex flex-col">
          Already have an account?{' '}
          <Link href="/auth/login" className="underline underline-offset-4">
            Login
          </Link>
        </Div>
      </Div>
    </Form>
  );
};

export default SignupForm;
