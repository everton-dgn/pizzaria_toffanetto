import * as S from 'components/Banner/styles'
import Image from 'next/image'
import { useContext } from 'react'
import { DataContext } from 'hooks/UseContext'

export const Banner = () => {
  const { hasNetwork } = useContext(DataContext)

  return (
    <>
      <S.ContainerBanner>
        <S.ContainerInfo>
          <img
            src="/img/logo-y.png"
            alt="Pizzaria Toffanetto"
            width="590"
            height="300"
          />
          <h3>
            Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
            como manda a tradição italiana
          </h3>
        </S.ContainerInfo>

        <S.ContainImg>
          {hasNetwork ? (
            <Image
              src="/img/banners/banner-home.jpg"
              alt="Bem-vindo(a) à Pizzaria Toffanetto"
              layout="fill"
              objectFit="cover"
              quality={90}
              priority={true}
            />
          ) : (
            <img
              src="/img/banners/banner-home.jpg"
              alt="Bem-vindo(a) à Pizzaria Toffanetto"
            />
          )}
        </S.ContainImg>
      </S.ContainerBanner>
    </>
  )
}
