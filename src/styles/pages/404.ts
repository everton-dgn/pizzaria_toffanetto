import styled from 'styled-components'

export const ContainImg = styled.div`
  display: flex;
  justify-content: center;
`

export const Paragraph = styled.p`
  font-size: 2rem;
  width: 100%;
  margin: 0 auto 2rem auto;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 80rem;
`

export const BtnHome = styled.button`
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: #34d399;
  padding: 1rem 3rem;
  margin: 3rem auto 0 auto;
  font-weight: bold;
  border-radius: 1rem;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #3ae7a8;
  }
`
