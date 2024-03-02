import Link from 'next/link'

import { clsx } from 'clsx'

import S from './styles.module.css'

export const Logo = () => (
  <Link
    href="/"
    title="Ir para a Página Inicial"
    className="h-36 w-[77px] sm:h-[30px] sm:w-[203px]"
  >
    <picture>
      <source
        media="(min-width: 600px)"
        srcSet="/img/logos/logo-horizontal.png"
      />
      <img
        className={clsx(S.logo, 'size-full opacity-0')}
        src="/img/logos/logo-vertical-pequeno.webp"
        alt="Logo - Pizzaria Toffanetto"
        width="216"
        height="100"
        fetchPriority="high"
      />
    </picture>
  </Link>
)
