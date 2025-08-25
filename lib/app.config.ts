import { configService } from '@/util/config';

export const AppConfig = {
  applicationName: 'Meow',
  title: 'Meow - Monetize your content',
  description: 'Become a meow member',
  keywords: ['Meow'],
  siteUrl: configService.NEXT_PUBLIC_BASE_URL,
  canonical: configService.NEXT_PUBLIC_BASE_URL,
  locale: 'en_IN',
  template: '%s | Meow',
  themeColor: '#FFFFFF',
  site_name: 'Meow',
  type: 'website',
  images: '/icons/app_icon.svg',
  manifest: '/site.webmanifest',
  icons: [
    {
      url: '/icons/app_icon_20x20.svg',
      rel: 'app_icon_0'
    },
    {
      url: '/icons/app_icon_36x36.svg',
      rel: 'app_icon_1'
    },
    {
      url: '/icons/app_icon_48x48.svg',
      rel: 'app_icon_2'
    },
    {
      url: '/icons/app_icon_72x72.svg',
      rel: 'app_icon_3'
    },
    {
      url: '/icons/app_icon_96x96.svg',
      rel: 'app_icon_4'
    },

    {
      url: '/icons/app_icon_144x144.svg',
      rel: 'app_icon_5'
    },
    {
      url: '/icons/app_icon_196x196.svg',
      rel: 'app_icon_6'
    },
    {
      url: '/icons/app_icon_256x256.svg',
      rel: 'app_icon_7'
    },
    {
      url: '/icons/app_icon_384x384.svg',
      rel: 'app_icon_8'
    },
    {
      url: '/icons/app_icon_460x460.svg',
      rel: 'app_icon_9'
    },
    {
      url: '/icons/app_icon_512x512.svg',
      rel: 'app_icon_10'
    },
    {
      url: '/icons/app_icon_1024x1024.svg',
      rel: 'app_icon_11'
    }
  ]
};
