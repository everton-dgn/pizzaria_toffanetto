import Link from 'next/link'

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
        className="size-full animate-[move-up_0.6s_cubic-bezier(0,_0.55,_0.45,_1)_forwards] opacity-0"
        src="/img/logos/logo-vertical-pequeno.webp"
        alt="Logo - Pizzaria Toffanetto"
        width="216"
        height="100"
        fetchPriority="high"
      />
    </picture>
  </Link>
)
