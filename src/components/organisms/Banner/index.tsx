'use client'

import Image from 'next/image'
import { useContext } from 'react'

import { DataContext } from 'hooks/UseContext'

import S from './styles.module.scss'

export const Banner = () => {
  const { hasNetwork } = useContext(DataContext)

  return (
    <div className={S.container}>
      <div className={S.wrapper_info}>
        <img
          src="/img/logos/logo-vertical.png"
          alt="Pizzaria Toffanetto"
          width="885"
          height="410"
          className={S.logo}
        />
        <h1 className={S.description}>
          Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
          como manda a tradição italiana
        </h1>
      </div>
      <div className={S.wrapper_image}>
        {hasNetwork ? (
          <Image
            src="/img/banners/banner-home.webp"
            alt="Bem-vindo(a) à Pizzaria Toffanetto"
            sizes="100%"
            className={S.image}
            fill
            priority
          />
        ) : (
          <img
            src="/img/banners/banner-home.webp"
            alt="Bem-vindo(a) à Pizzaria Toffanetto"
            className={S.image}
            fetchPriority="high"
          />
        )}
      </div>
    </div>
  )
}
