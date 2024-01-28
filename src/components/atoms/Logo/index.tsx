import Link from 'next/link'

import S from './styles.module.scss'

export const Logo = () => (
  <Link href="/" title="Ir para a Página Inicial" className={S.link_logo}>
    <picture>
      <source
        media="(min-width: 600px)"
        srcSet="/img/logos/logo-horizontal.png"
      />
      <img
        className={S.logo}
        src="/img/logos/logo-vertical-pequeno.webp"
        alt="Logo - Pizzaria Toffanetto"
        width="216"
        height="100"
        fetchPriority="high"
      />
    </picture>
  </Link>
)
