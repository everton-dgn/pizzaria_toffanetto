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

export const NavLink = styled.a`
  width: min-content;
  height: min-content;
  margin: 1.5rem auto 0 auto;
`

export const BtnHome = styled.button`
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: #34d399;
  padding: 1.7rem 4rem;
  font-weight: 800;
  border-radius: 1rem;
  white-space: nowrap;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #3ae7a8;
  }
`
