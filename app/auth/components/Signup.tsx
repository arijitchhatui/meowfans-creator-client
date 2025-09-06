'use client';

import { Header } from '@/app/auth/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Div, Form } from '@/wrappers/HTMLWrappers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import OtherLogin from './OtherLogin';

const SignupForm = () => {
  const [activeTab, setActiveTab] = useState<string>('account');
  const router = useRouter();

  return (
    <Form className="p-6 md:p-8 flex flex-col">
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
              <Input id="tabs-demo-fullname" placeholder="Meow User" type="text" />
            </Div>
            <Div className="grid gap-3">
              <Label htmlFor="tabs-demo-email">Email</Label>
              <Input id="tabs-demo-email" placeholder="meow@gmail.com" type="email" />
            </Div>
            <Button type="button" className="w-full" onClick={() => setActiveTab('password')}>
              Next
            </Button>
          </TabsContent>

          <TabsContent value="password" className="space-y-1">
            <Div className="grid gap-3">
              <Label htmlFor="tabs-demo-new-password">Password</Label>
              <Input id="tabs-demo-new-password" type="password" autoComplete="new-password" />
            </Div>
            <Button
              type="submit"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                router.push('/home');
              }}
            >
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
