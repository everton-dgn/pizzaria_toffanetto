import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import {
  AUTHOR,
  DESCRIPTION,
  GITHUB,
  IMAGE_OG,
  LINKEDIN,
  NAME_APP,
  URL_SITE,
  YOUTUBE
} from 'constants/metadata'

export const metadata: Metadata = {
  title: 'Página Inicial',
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FoodEstablishment',
      name: NAME_APP,
      url: URL_SITE,
      description: DESCRIPTION,
      sameAs: [LINKEDIN, YOUTUBE, GITHUB]
    }
  ],
  '@type': 'FoodEstablishment',
  name: NAME_APP,
  description: DESCRIPTION,
  url: URL_SITE,
  image: IMAGE_OG,
  publisher: {
    '@type': 'FoodEstablishment',
    name: NAME_APP,
    logo: IMAGE_OG,
    sameAs: [LINKEDIN, YOUTUBE, GITHUB]
  },
  priceRange: 'R$$',
  telephone: '000-90000-0000',
  email: 'contato@yourwebsite.com',
  menu: GITHUB,
  deliveryLeadTime: 'PT30M',
  paymentAccepted: 'Cartão de Crédito/Débito, Dinheiro, Pix, Pagamento Online',
  areaServed: 'Nome da Cidade ou Região',
  customerSupport: {
    '@type': 'ContactPoint',
    telephone: '+55 00 90000-0000'
  },
  founder: AUTHOR,
  foundingDate: '1980-01-15',
  legalName: NAME_APP,
  servesCuisine: 'Pizza Italiana',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55 00 90000-0000',
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: ['Portuguese']
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Exemplo, 123',
    addressLocality: 'Cidade',
    addressRegion: 'Estado',
    postalCode: '00000-000',
    addressCountry: 'BR'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '18:00',
      closes: '00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '16:00',
      closes: '02:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '912'
  },
  review: [
    {
      '@type': 'Review',
      author: 'John Doe',
      datePublished: '2024-01-01',
      description: 'A melhor pizza que já comi!',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      }
    }
  ]
}

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    {children}
  </>
)

export default HomeLayout
