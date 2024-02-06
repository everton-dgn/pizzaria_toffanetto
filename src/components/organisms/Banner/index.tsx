import Image from 'next/image'

import S from './styles.module.scss'

export const Banner = () => (
  <div className={S.container}>
    <div className={S.wrapper_info}>
      <Image
        src="/img/logos/logo-vertical.png"
        alt="Pizzaria Toffanetto"
        sizes="560px"
        width="560"
        height="238"
        className={S.logo}
        priority
      />
      <h1 className={S.description}>
        Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
        como manda a tradição italiana
      </h1>
    </div>
    <div className={S.wrapper_image}>
      <Image
        src="/img/banners/banner-home.webp"
        alt="Bem-vindo(a) à Pizzaria Toffanetto"
        sizes="100%"
        className={S.image}
        fill
        priority
      />
    </div>
  </div>
)
