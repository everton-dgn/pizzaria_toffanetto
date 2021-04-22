import styled from 'styled-components'
import { c, s } from 'theme'

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
  animation: ${s.zoom} 0.4s ease-in, ${s.fadeIn}, 0.2s linear;

  div {
    position: relative !important;
    overflow: visible !important;
  }

  img {
    padding: 0 2rem !important;
    object-fit: contain;
  }
`
