import styled from 'styled-components'
import { c } from 'theme'

export const ContainerCenter = styled(c.Container)`
  align-items: center;
`

export const ContainerFluid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  top: 0;
  height: 5rem;
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  background-color: #7f1d1d;
  height: 100%;
  align-items: center;
`

export const Logo = styled.span`
  color: #fff;
  font-style: italic;

  em {
    color: #34d399;
    font-size: 2.2rem;
    letter-spacing: 0;
    font-weight: 600;
  }
`
