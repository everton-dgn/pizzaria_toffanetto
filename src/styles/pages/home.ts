import styled from 'styled-components'
import { s } from 'theme'

export const ContainImg = styled.div`
  div {
    position: relative !important;
    height: 10vw;
    min-height: 10rem;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
  }

  ${s.break(102.4)} {
    height: 15rem;

    div {
      height: 15rem;
    }
  }
`

export const Paragraph = styled.p`
  font-size: 2rem;
  width: 100%;
  margin: 0 auto 2rem auto;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 80rem;
`
