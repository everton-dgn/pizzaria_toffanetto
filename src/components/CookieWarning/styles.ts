import styled from 'styled-components'
import { s, c } from 'theme'

export const ContainerWarning = styled(c.Box)`
  padding: 1rem 0 0 0;
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 2.4rem #00000054;
`

export const Content = styled(c.Container)`
  justify-content: center;
  align-items: center;
  padding: 0;

  p {
    font-size: 1.4rem;
    margin: 0 2rem 1rem 2rem;
    text-align: center;
  }

  button {
    font-size: 1.7rem;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #34d399;
    width: calc(100% - 4rem);
    max-width: 45rem;
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: #39ecab;
    }
  }

  ${s.break(40)} {
    flex-direction: row;
    flex-wrap: wrap;

    p {
      font-size: 1.8rem;
    }

    button {
      max-width: 25rem;
    }
  }

  ${s.break(100)} {
    p {
      text-align: left;
    }
  }
`
