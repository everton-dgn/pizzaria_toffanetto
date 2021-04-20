import styled from 'styled-components'
import { c, s } from 'theme'

export const ContainerBanner = styled.div`
  position: relative;
  min-height: 80vh;
`

export const ContainerInfo = styled(c.Box)`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding: 2rem;
  background-image: linear-gradient(90deg, #00000052 76%, transparent);

  h3 {
    color: #fff;
    font-weight: 500;
    font-size: 2rem;
    max-width: 30rem;
    margin-top: 1rem;
  }

  img {
    max-width: 30rem;
    height: fit-content;
  }

  ${s.break(40)} {
    padding: 2rem 2rem 2rem 5vw;

    h3 {
      font-size: 2.5rem;
      margin-top: 2rem;
      max-width: 50rem;
    }
    img {
      max-width: 50rem;
    }
  }

  ${s.break(102.4)} {
    padding: 2rem 2rem 2rem 10vw;
    background-image: linear-gradient(transparent, transparent);

    h3 {
      font-size: 3rem;
      margin-top: 2.5rem;
      max-width: 60rem;
    }

    img {
      max-width: 60rem;
    }
  }
`

export const ContainImg = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;

  div {
    position: relative !important;
    height: calc(100vh - 5rem);
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-position: 63%;
    object-fit: cover;

    ${s.break(60)} {
      object-position: initial;
    }
  }
`
