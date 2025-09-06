'use client';

import { Div, Footer, Typography } from '@/wrappers/HTMLWrappers';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const LandingPageFooter = () => {
  return (
    <Footer className="py-6 mt-12">
      <Div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <Typography className="text-sm">© {new Date().getFullYear()} PayView. All rights reserved.</Typography>
        <Div className="flex space-x-6 mt-4 md:mt-0">
          <Facebook className="hover:text-gray-600 cursor-pointer" />
          <Instagram className="hover:text-gray-600 cursor-pointer" />
          <Twitter className="hover:text-gray-600 cursor-pointer" />
        </Div>
      </Div>
    </Footer>
  );
};

export default LandingPageFooter;
