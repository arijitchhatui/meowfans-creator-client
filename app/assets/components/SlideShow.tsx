'use client';

import { Div } from '@/wrappers/HTMLWrappers';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Props {
  slideShow: boolean;
  onSlideShowOff: () => unknown;
  slideUrls?: string[];
}
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  width: '600px'
};

export const SlideShow: React.FC<Props> = ({ onSlideShowOff, slideShow, slideUrls }) => {
  return (
    <Slide>
      <Div className="flex flex-row overflow-x-auto w-full space-x-1 snap-x snap-mandatory scrollbar-hide scroll-smooth m-1 p-1">
        {slideUrls &&
          slideUrls.map((url, index) => <Image src={url} key={index} alt="preview" width={800} height={800} className="w-full h-[calc(100vh-136px)] snap-center" />)}
      </Div>
    </Slide>
  );
};
