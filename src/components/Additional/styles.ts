import styled from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 900;
  font-size: 2.2rem;
  margin-bottom: 2rem;
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

export const ContainerMain = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 #fff, 0.6rem 0.6rem 1.6rem 0 #e0e0ef;
  width: 100%;

  ${s.break(55.2)} {
    width: calc(50% - 1rem);
  }

  ${s.break(108.2)} {
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
  text-align: center;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #7f1d1d;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0.7rem 0;
  justify-content: center;
`

export const SubTitle = styled.h4`
  color: #34d399;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.9rem;
  margin-top: 0;
`

export const ContainerAdditional = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Box = styled.div`
  display: flex;
  border: 0.2rem solid #34d399;
  border-radius: 1rem;
  padding: 1.5rem;
  flex-direction: column;
  width: 100%;
`

export const BoxImg = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  height: 18rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 1.2rem;

  .number {
    max-width: 6rem;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 0 1rem;
    color: #39393b;
  }
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  width: 100%;
  min-width: 6rem;
  -moz-appearance: textfield;
  appearance: none;
  -webkit-appearance: textfield;
  background-color: #fff;
  border: 0.2rem solid #222;
`

export const BtnCount = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  background-color: #34d399;
  font-weight: bold;
  font-size: 2rem;
  padding: 0;
  border-radius: 0.6rem;
  min-width: 4rem;

  &:hover {
    background-color: #3ceaab;
  }
`
