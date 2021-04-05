import styled from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 900;
  font-size: 2.2rem;
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

export const ContainerSize = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 #fff, 0.6rem 0.6rem 1.6rem 0 #e0e0ef;
  width: 100%;

  ${s.break(35)} {
    width: calc(50% - 1rem);
  }

  ${s.break(87)} {
    width: calc(25% - 2rem);
  }

  ${s.break(130)} {
    width: calc(25% - 3rem);
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #7f1d1d;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 1rem 0 0 0;
  justify-content: center;
  text-align: center;
`

export const SubTitle = styled.h4`
  color: #34d399;
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: -0.5rem;
  margin-top: 1rem;
`

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`

export const RadioContent = styled.label`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid #34d399;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  width: 100%;
`

export const RadioLabel = styled.div`
  margin: -0.5rem auto 0 auto;

  input {
    width: 1.8rem;
    height: 1.8rem;
  }
`
