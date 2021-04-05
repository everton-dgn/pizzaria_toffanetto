import styled from 'styled-components'
import { s } from 'theme'
import { Form } from '@unform/web'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 3rem;
  width: fit-content;

  &:after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 30%;
    background-color: #34d399;
    margin-top: 0.5rem;
    border-radius: 1rem;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
  width: 100%;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 #fff, 0.6rem 0.6rem 1.6rem 0 #e0e0ef;
`

export const FormFields = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: dense;
  column-gap: 2rem;
  width: 100%;

  div {
    grid-column: span 12;
  }

  p {
    margin-top: 0;
  }

  ${s.break(60)} {
    div {
      grid-column: span 6;
    }
  }

  ${s.break(100)} {
    div {
      grid-column: span 4;
    }
  }
`

export const BtnSend = styled.button`
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: #34d399;
  width: fit-content;
  padding: 1rem 7rem;
  margin: 1.6rem auto 0 auto;
  font-weight: bold;
  border-radius: 1rem;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #38e3a5;
  }
`
