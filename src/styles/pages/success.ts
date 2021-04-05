import styled from 'styled-components'
import { Whatsapp } from '@styled-icons/bootstrap'
import { s } from 'theme'

export const Zap = styled(Whatsapp)`
  //color: #374151;
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.3rem;
  margin-left: 0.5rem;
`

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

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  width: 100%;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 #fff, 0.6rem 0.6rem 1.6rem 0 #e0e0ef;
`

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ContainerSuccess = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid #34d399;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;

  ${s.break(37)} {
    width: calc(50% - 1.5rem);
  }

  ${s.break(65)} {
    width: calc(25% - 1.5rem);
  }
`

export const BtnSend = styled.button`
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

export const Title = styled.h1`
  font-weight: bold;
  color: #7f1d1d;
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
`
