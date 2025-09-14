'use client';

import { Div, H2, H3, Span, Typography } from '@/wrappers/HTMLWrappers';
import { CornerDownRight, Globe2, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';
import { WarpBackground } from '../ui/shadcn-io/warp-background';
const whyPayViewContents = [
  { icon: <ShieldCheck className="size-8 text-green-600" />, key: 'Secure &Fair:', value: 'Only pay for what you view.' as const },
  {
    icon: <Sparkles className="size-8 text-purple-600" />,
    key: 'For Creators:',
    value: 'Upload, set your price & earn directly.' as const
  },
  { icon: <Star className="size-8 text-yellow-500" />, key: 'For Viewers:', value: 'Quick checkout, instant image unlock.' as const },
  { icon: <Globe2 className="size-8 text-blue-600" />, key: 'Global Platform:', value: 'Creators & collectors in one place.' as const }
];
const howItWorksContents = [
  'Browse → Discover thousands of exclusive images.',
  'Preview → View watermarked previews for free.',
  'Unlock → Pay securely and get instant full-quality access.',
  'Own the Moment → Save your unlocked images forever.'
];
interface Props {
  highLightedId: string | null;
  divRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}
const LandingPageContent: React.FC<Props> = ({ highLightedId, divRefs }) => {
  const router = useRouter();
  return (
    <Div className="flex flex-col space-y-12 p-6 md:p-12 mt-10 md:mt-0 w-full">
      <Div className="flex flex-col space-y-3">
        <WarpBackground perspective={100} beamsPerSide={4} beamSize={6} beamDuration={2.5} className="flex items-center justify-center">
          <Div className="flex flex-row justify-between items-center content-center ">
            {/* HEADER BANNER */}
            <Div className="flex flex-col text-center md:text-left  bg-linear-to-r from-blue-600 to-sky-400 rounded-2xl">
              <Typography className="font-extrabold text-7xl md:text-9xl animate-pulse text-amber-50 drop-shadow-[0_0_10px_#00f] ">
                START
              </Typography>
              <Typography className="font-extrabold text-6xl md:text-8xl animate-pulse text-amber-100 drop-shadow-[0_0_10px_#00f]">
                CREATING
              </Typography>
              <Typography className="font-extrabold text-7xl md:text-9xl animate-pulse text-amber-200 drop-shadow-[0_0_10px_#00f]">
                WITH
              </Typography>
              <Typography className="font-extrabold text-7xl md:text-9xl animate-pulse text-amber-500 drop-shadow-[0_0_10px_#00f]">
                MEOW
              </Typography>
              <Div className="font-bold shadow-accent-foreground md:hidden">
                <Button
                  variant={'outline'}
                  className="shadow accent-accent-foreground bg-linear-to-r from-blue-600 to-sky-400 "
                  onClick={() => router.push('/auth/creator-signup')}
                >
                  BECOME A CREATOR
                </Button>
              </Div>
              <Div className="flex justify-center md:justify-start space-x-4 mt-6">
                <Button size="lg" className="shadow-accent-foreground">
                  🚀 Get Started
                </Button>
                <Button variant="outline" className="shadow-accent-foreground" size="lg">
                  Explore Images
                </Button>
              </Div>
            </Div>
          </Div>
        </WarpBackground>
      </Div>

      {/* HERO SECTION */}
      <Div className="text-center space-y-3">
        <H2 className="font-extrabold text-4xl">Unlock Premium Images with One Click</H2>
        <Typography className="text-lg text-gray-600">Browse. Preview for free. Pay only when you want full access.</Typography>
      </Div>

      {/* HOW IT WORKS */}
      <Div
        ref={(el: HTMLDivElement | null) => {
          divRefs.current['1'] = el;
        }}
        className={`space-y-6 rounded-xl bg-accent`}
        id="1"
      >
        <H3 className="font-extrabold text-4xl">How It Works?</H3>
        <Div className="grid md:grid-cols-2 gap-4">
          {howItWorksContents.map((content, idx) => (
            <Div key={idx} className="flex items-start space-x-2">
              <CornerDownRight className="size-10 text-amber-500" />
              <Typography className="font-medium">{content}</Typography>
            </Div>
          ))}
        </Div>
      </Div>

      {/* WHY PAYVIEW */}
      <Div
        ref={(el: HTMLDivElement | null) => {
          divRefs.current['2'] = el;
        }}
        className={`space-y-6 bg-gray-50 dark:bg-gray-700 rounded-2xl`}
        id="2"
      >
        <H3 className="font-extrabold text-4xl text-center">Why PayView?</H3>
        <Div className="grid md:grid-cols-2 gap-6">
          {whyPayViewContents.map((content, idx) => (
            <Div key={idx} className="flex items-start space-x-3">
              {content.icon}
              <Typography>
                <Span className="font-semibold">{content.key}</Span> {content.value}
              </Typography>
            </Div>
          ))}
        </Div>
      </Div>

      {/* CREATOR SECTION */}
      <Div
        ref={(el: HTMLDivElement | null) => {
          divRefs.current['3'] = el;
        }}
        className={`text-center bg-amber-50 dark:bg-gray-600 rounded-2xl p-8 hover:scale-105 transition-transform shadow-lg ${
          highLightedId === '3' ? 'bg-indigo-50' : 'bg-accent'
        }`}
        id="3"
      >
        <H3 className="font-extrabold text-4xl mb-3">For Creators</H3>
        <Typography className="text-lg mb-6">
          Start creating with us. Upload your best work, set your price, and get paid every time someone views your image.
        </Typography>
        <Button size="lg" onClick={() => router.push('/auth/creator-signup')}>
          🎨 Become a Creator
        </Button>
      </Div>

      {/* VIEWER SECTION */}
      <Div
        ref={(el: HTMLDivElement | null) => {
          divRefs.current['4'] = el;
        }}
        className={`text-center bg-indigo-50 dark:bg-gray-500 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform ${
          highLightedId === '4' ? 'bg-indigo-50' : 'bg-accent'
        }`}
        id="4"
      >
        <H3 className="font-extrabold text-4xl mb-3">For Viewers</H3>
        <Typography className="text-lg mb-6">Stop paying for subscriptions you don&apos;t use. Pay only for the images you love.</Typography>
        <Button variant="default" size="lg">
          🔎 Start Exploring
        </Button>
      </Div>

      {/* TESTIMONIALS */}
      <Div
        ref={(el: HTMLDivElement | null) => {
          divRefs.current['5'] = el;
        }}
        className={`space-y-6 ${highLightedId === '5' ? 'bg-indigo-50' : 'bg-accent'}`}
        id="5"
      >
        <H3 className="font-extrabold text-4xl text-center">What People Say</H3>
        <Div className="grid md:grid-cols-2 gap-6">
          <Div className="p-6 rounded-xl shadow bg-white dark:bg-gray-400 border">
            ⭐⭐⭐⭐⭐
            <Typography>
              “Finally a platform where creators are valued, and viewers get control. I doubled my earnings in 3 months.”
            </Typography>
            <Typography className="font-semibold mt-2">— John, Photographer</Typography>
          </Div>
          <Div className="p-6 rounded-xl shadow bg-white dark:bg-gray-400 border">
            ⭐⭐⭐⭐⭐
            <Typography>“The pay-per-view model is genius. I only pay for the images I need — no wasted subscriptions.”</Typography>
            <Typography className="font-semibold mt-2">— Chris, Designer</Typography>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default LandingPageContent;
