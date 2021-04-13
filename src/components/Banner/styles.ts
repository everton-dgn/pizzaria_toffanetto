import styled from 'styled-components'
import { c, s } from 'theme'

export const ContainerBanner = styled.div`
  position: relative;
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
    font-weight: 400;
    font-size: 2rem;
    max-width: 30rem;
    margin-top: 1rem;
  }

  div {
    min-width: auto !important;
    max-width: 30rem !important;
    max-height: 15rem !important;
  }

  ${s.break(60)} {
    padding: 2rem 2rem 2rem 5vw;
    background-image: linear-gradient(transparent, transparent);

    h3 {
      font-size: 2.5rem;
      margin-top: 2rem;
      max-width: 50rem;
    }

    div {
      max-width: 43rem !important;
      max-height: 20rem !important;
    }
  }

  ${s.break(102.4)} {
    padding: 2rem 2rem 2rem 10vw;

    h3 {
      font-size: 3rem;
      margin-top: 2.5rem;
      max-width: 60rem;
    }

    div {
      max-width: 60rem !important;
      max-height: initial !important;
    }
  }
`

export const ContainImg = styled.div`
  div {
    position: relative !important;
    height: calc(60vh - 5rem);
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-position: 63%;

    ${s.break(60)} {
      object-position: initial;
    }
  }

  ${s.break(102.4)} {
    div {
      height: auto;
    }
  }
`
