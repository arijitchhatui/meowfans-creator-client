'use client';

import { Header } from '@/app/auth/components/Header';
import { Div, Form } from '@/wrappers/HTMLWrappers';
import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

const ForgotPassword = () => {
  const [hasSend, setHasSend] = useState<boolean>(false);
  return (
    <Form className="p-6 md:p-8">
      <Div className="flex flex-col gap-6">
        <Header />
        <Div className="grid gap-3">
          <Label htmlFor="email">Enter your email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required autoComplete="email" />
        </Div>
        {hasSend && (
          <Div className="grid gap-3">
            <Label htmlFor="password-otp">Verify with OTP</Label>
            <Input id="password-otp" type="text" placeholder="xxxxxx" required />
          </Div>
        )}
        <Button type="submit" className="w-full" onClick={() => setHasSend(true)}>
          Send
        </Button>
      </Div>
    </Form>
  );
};
export default ForgotPassword;
