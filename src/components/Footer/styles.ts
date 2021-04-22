import styled from 'styled-components'
import { c, s } from 'theme'

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  background-color: #7f1d1d;
  padding: 3rem 0;
  margin-top: auto;
`

export const ContainerFooter = styled(c.Container)`
  padding: 1.5rem;
  color: #fff;
  justify-content: center;
  flex-direction: row;
  animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.2s linear;

  em {
    color: yellow;
    margin-left: 0.5rem;
  }
`
