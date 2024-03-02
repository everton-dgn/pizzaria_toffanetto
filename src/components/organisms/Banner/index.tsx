import Image from 'next/image'

import { clsx } from 'clsx'

import S from './styles.module.scss'

export const Banner = () => (
  <div
    className={clsx(
      'relative h-[calc(100vh-50px)] jc-center row-full',
      S.container
    )}
  >
    <div className="z-base h-full jc-center container-col">
      <Image
        src="/img/logos/logo-vertical.png"
        alt="Pizzaria Toffanetto"
        sizes="560px"
        width="560"
        height="238"
        className={clsx(
          'h-auto max-h-[40vh] w-full max-w-[300px] object-contain object-left xs:max-w-[400px] lg:max-w-[500px]',
          S.logo
        )}
        priority
      />
      <h1
        className={clsx(
          'mt-12 max-w-[400px] text-balance text-20 font-500 leading-[1.5] text-white xs:mt-20 xs:max-w-[500px] xs:text-[calc(15px+1.3vh)] lg:mt-24 lg:max-w-[600px] lg:text-30',
          S.description
        )}
      >
        Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
        como manda a tradição italiana
      </h1>
    </div>
    <div className="absolute size-full">
      <Image
        src="/img/banners/banner-home.webp"
        alt="Bem-vindo(a) à Pizzaria Toffanetto"
        sizes="100%"
        className="object-cover object-[67%] lg:object-center"
        fill
        priority
      />
    </div>
  </div>
)
