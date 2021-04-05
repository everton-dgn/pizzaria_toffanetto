import styled from 'styled-components'
import { c } from 'theme'

export const Footer = styled.div`
  width: 100%;
  bottom: 0;
  background-color: #7f1d1d;
  padding: 3rem 0;
  margin-top: auto;
`

export const ContainerFooter = styled(c.Container)`
  padding: 1.5rem 0;
  color: #fff;
  justify-content: center;
  flex-direction: row;

  em {
    color: yellow;
    margin-left: 0.5rem;
  }
`
