import styled from 'styled-components'
import { s } from 'theme'

export const ContainImg = styled.div`
  height: 10vw;
  min-height: 10rem;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${s.break(102.4)} {
    height: 15rem;
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
