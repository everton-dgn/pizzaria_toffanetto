import * as S from 'components/Header/styles'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <S.ContainerFluid>
        <S.Nav>
          <S.ContainerCenter>
            <Link href="/">
              <a>
                <S.Logo>
                  <img
                    src="/img/logo-x.png"
                    alt="Pizzaria Toffanetto"
                    width="240"
                    height="50"
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
