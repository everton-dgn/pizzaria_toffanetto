import * as S from 'components/Banner/styles'
import Image from 'next/image'

export const Banner = () => {
  return (
    <>
      <S.ContainerBanner>
        <S.ContainerInfo>
          <Image
            src="/img/logo-y.svg"
            alt="Pizzaria Toffanetto"
            width={400}
            height={300}
            objectFit="contain"
            priority={true}
          />
          <h3>
            Pizzas exageradamente recheadas e saborosas, feitas em forno a lenha
            como manda a tradição italiana
          </h3>
        </S.ContainerInfo>

        <S.ContainImg>
          <Image
            src="/img/headers/banner-home.jpg"
            alt="Bem-vindo(a) à Pizzaria Toffanetto"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority={true}
          />
        </S.ContainImg>
      </S.ContainerBanner>
    </>
  )
}
