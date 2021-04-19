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
  border-bottom: 0.2rem solid #34d399;
`

export const Logo = styled.span`
  display: flex;

  div {
    position: relative !important;
    overflow: visible !important;
  }

  img {
    filter: drop-shadow(0 0 0.5rem #000);
    transition: filter 0.3s linear;
    padding: 0 2rem !important;

    &:hover {
      filter: drop-shadow(0 0 0.5rem #ababab);
      transition: filter 0.3s linear;
    }
  }
`
