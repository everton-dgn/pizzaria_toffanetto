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
`

export const BtnNext = styled.button`
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #34d399;
  width: fit-content;
  padding: 1rem 5rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #39ecab;
  }
`
