import styled from 'styled-components'
import { s } from 'theme'

export const TitleSection = styled.h1`
  width: fit-content;
  margin: 4rem auto 2.3rem auto;
  text-align: center;
  font-weight: 800;
  color: #7f1d1d;
  font-size: ${s.titleMain};
  animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.2s linear;

  &:after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 30%;
    background-color: #34d399;
    margin: 2rem auto 0 auto;
    border-radius: 1rem;
  }
`
