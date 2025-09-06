'use client';

import { Div } from '@/wrappers/HTMLWrappers';
import {
  CircleDollarSign,
  Gem,
  LoaderIcon,
  LucideIcon,
  MessageCircle,
  NetworkIcon,
  ShieldQuestionMark,
  TableOfContents,
  UserRoundCheck
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { Suspense, useRef, useState } from 'react';

export interface Contents {
  label: string;
  icon: LucideIcon;
  id: string;
}

const LandingPageContent = dynamic(() => import('@/components/landing/Content'), { ssr: false });
const LandingPageHeader = dynamic(() => import('@/components/landing/Header'), { ssr: false });
const LandingPagePricing = dynamic(() => import('@/components/landing/Pricing'), { ssr: false });
const LandingPageFooter = dynamic(() => import('@/components/landing/Footer'), { ssr: false });

const contents: Contents[] = [
  { label: 'How It Works?', icon: NetworkIcon, id: '1' },
  { label: 'Why PayView?', icon: ShieldQuestionMark, id: '2' },
  { label: 'For Creators', icon: Gem, id: '3' },
  { label: 'For Viewers', icon: UserRoundCheck, id: '4' },
  { label: 'What People Say?', icon: MessageCircle, id: '5' },
  { label: 'Pricing plans', icon: CircleDollarSign, id: '6' },
  { label: 'FAQ', icon: TableOfContents, id: '8' }
];

export const LandingPage = () => {
  const [highLightedId, setHighLightedId] = useState<string | null>(null);
  const divRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <Suspense fallback={<LoaderIcon className="animate-spin" />}>
      <Div className="flex flex-col min-h-screen">
        <LandingPageHeader contents={contents} setHighLightedId={setHighLightedId} divRefs={divRefs} />
        <LandingPageContent highLightedId={highLightedId} divRefs={divRefs} />
        <LandingPagePricing highLightedId={highLightedId} divRefs={divRefs} />
        <LandingPageFooter />
      </Div>
    </Suspense>
  );
};
