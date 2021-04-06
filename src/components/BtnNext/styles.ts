import styled, { css } from 'styled-components'

export const ContainerBtn = styled.div<{ center?: string }>`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  width: 100%;

  ${({ center }) =>
    center === undefined &&
    css`
      justify-content: flex-end;
    `}

  a {
    width: 100%;
    max-width: 30rem;
  }
`

export const BtnNext = styled.button`
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #34d399;
  width: 100%;
  max-width: 30rem;
  padding: 1.4rem 5rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #39ecab;
  }
`
