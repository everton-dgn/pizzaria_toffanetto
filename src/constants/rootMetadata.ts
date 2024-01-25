import type { Metadata } from 'next'

import {
  AUTHOR,
  DESCRIPTION,
  ICON_512_X_512,
  IMAGE_OG,
  KEYWORDS,
  LINKEDIN,
  NAME_APP
} from './metadata'

export const ROOT_METADATA: Metadata = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  metadataBase: new URL(process.env.NEXT_PUBLIC_ALLOW_ORIGIN!),
  generator: 'Next.js',
  category: 'comida',
  applicationName: NAME_APP,
  referrer: 'origin-when-cross-origin',
  authors: [
    {
      name: AUTHOR,
      url: LINKEDIN
    }
  ],
  icons: {
    icon: ICON_512_X_512,
    shortcut: ICON_512_X_512,
    apple: ICON_512_X_512,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: ICON_512_X_512
    }
  },
  creator: AUTHOR,
  publisher: AUTHOR,
  title: NAME_APP,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  manifest: '/manifest.json',
  appleWebApp: {
    title: NAME_APP,
    statusBarStyle: 'black-translucent',
    capable: true,
    startupImage: ICON_512_X_512
  },
  openGraph: {
    locale: 'pt_BR',
    siteName: NAME_APP,
    title: NAME_APP,
    url: '/',
    description: DESCRIPTION,
    type: 'website',
    images: [
      {
        secureUrl: IMAGE_OG,
        url: IMAGE_OG,
        type: 'image/jpeg',
        alt: NAME_APP,
        width: 512,
        height: 512
      }
    ]
  },
  twitter: {
    card: 'summary',
    site: '@jusdocs',
    title: NAME_APP,
    description: DESCRIPTION,
    images: {
      url: IMAGE_OG,
      alt: NAME_APP
    }
  }
}
