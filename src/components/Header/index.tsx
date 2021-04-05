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
                  Pizzaria <em>Toffanetto</em>
                </S.Logo>
              </a>
            </Link>
          </S.ContainerCenter>
        </S.Nav>
      </S.ContainerFluid>
    </>
  )
}
