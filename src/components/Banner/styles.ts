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

  h3 {
    color: #fff;
    font-weight: 400;
    font-size: 2rem;
    max-width: 30rem;
    margin-top: 1rem;
    text-shadow: 0 0 4rem #000, 0 0 3rem #000, 0 0 2rem #000, 0 0 1rem #000;
  }

  div {
    min-width: auto !important;
    max-width: 30rem !important;
    max-height: 15rem !important;
  }

  img {
    filter: drop-shadow(0 0 2rem #000);
  }

  ${s.break(60)} {
    padding: 2rem 2rem 2rem 5vw;

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
  }

  ${s.break(102.4)} {
    div {
      height: auto;
    }
  }
`
