'use client';

import { Div, H2, H3, LI, Span, Typography, UL } from '@/wrappers/HTMLWrappers';
import { Crown, Wallet, Zap } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  highLightedId: string | null;
  divRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}

export const LandingPagePricing: React.FC<Props> = ({ highLightedId, divRefs }) => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      icon: <Wallet className="size-10 text-green-600" />,
      features: ['Browse images', 'Preview with watermark', 'Save favorites'],
      buttonText: 'Start Free',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Pay-Per-View',
      price: 'From $1',
      icon: <Zap className="size-10 text-amber-600" />,
      features: ['Unlock images instantly', 'Secure payment checkout', 'No subscriptions needed'],
      buttonText: 'Explore Images',
      buttonVariant: 'default' as const
    },
    {
      name: 'Creator Pro',
      price: '$9.99/mo',
      icon: <Crown className="size-10 text-purple-600" />,
      features: ['Upload unlimited images', 'Set your own prices', 'Earn from every view', 'Analytics dashboard'],
      buttonText: 'Become a Creator',
      buttonVariant: 'default' as const
    }
  ];

  return (
    <Div
      ref={(el: HTMLDivElement | null) => {
        divRefs.current['6'] = el;
      }}
      className={`py-12 bg-gradient-to-br from-amber-50 to-indigo-50 rounded-2xl ${highLightedId === '6' ? 'bg-indigo-500' : 'bg-accent'}`}
      id="6"
    >
      <H2 className="text-center font-extrabold text-4xl mb-10">Pricing Plans</H2>
      <Div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, i) => (
          <Div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <Div className="flex flex-col items-center space-y-3">
              {plan.icon}
              <H3 className="text-2xl font-bold">{plan.name}</H3>
              <Typography className="text-3xl font-extrabold">{plan.price}</Typography>
            </Div>
            <UL className="mt-6 space-y-2 text-gray-700">
              {plan.features.map((f, idx) => (
                <LI key={idx} className="flex items-center space-x-2">
                  <Span className="text-green-600">✔</Span>
                  <Span>{f}</Span>
                </LI>
              ))}
            </UL>
            <Div className="mt-8 text-center">
              <Button size="lg" variant={plan.buttonVariant}>
                {plan.buttonText}
              </Button>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  );
};
