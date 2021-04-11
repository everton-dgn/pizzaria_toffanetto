import * as S from 'components/Header/styles'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <>
      <S.ContainerFluid>
        <S.Nav>
          <S.ContainerCenter>
            <Link href="/">
              <a>
                <S.Logo>
                  <Image
                    src="/img/logo-x.svg"
                    alt="Pizzaria Toffanetto"
                    width={210}
                    height={50}
                    objectFit="contain"
                  />
                </S.Logo>
              </a>
            </Link>
          </S.ContainerCenter>
        </S.Nav>
      </S.ContainerFluid>
    </>
  )
}
