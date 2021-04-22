import styled, { css } from 'styled-components'
import { s } from 'theme'

export const ContainerBtn = styled.div<{ center?: string }>`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  animation: ${s.moveUp} 0.4s ease-in-out;

  ${({ center }) =>
    center === undefined &&
    css`
      justify-content: flex-end;
    `}

  a {
    width: 100%;
    max-width: 100%;
  }

  ${s.break(25)} {
    max-width: 30rem;

    a {
      max-width: 30rem;
    }
  }
`

export const BtnNext = styled.button`
  font-size: 1.7rem;
  font-weight: 800;
  text-transform: uppercase;
  background-color: #34d399;
  width: 100%;
  padding: 1.4rem 0;
  border-radius: 0.8rem;
  transition: background-color 0.2s linear;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #39ecab;

    &:disabled {
      background-color: #34d399;
    }
  }
`
