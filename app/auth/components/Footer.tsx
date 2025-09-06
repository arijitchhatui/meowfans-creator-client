'use client';

import { Anchor, Div } from '@/wrappers/HTMLWrappers';

const Footer = () => {
  return (
    <Div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      By clicking continue, you agree to our <Anchor href="#">Terms of Service</Anchor> and <Anchor href="#">Privacy Policy</Anchor>.
    </Div>
  );
};

export default Footer;
