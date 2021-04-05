import styled, { css } from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 900;
  font-size: 2.2rem;
  margin-bottom: 1.6rem;
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

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`

export const Card = styled.label`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 #fff, 0.6rem 0.6rem 1.6rem 0 #e0e0ef;
  width: 100%;

  ${s.break(54)} {
    padding: 1.6rem 2rem;
  }

  ${s.break(70)} {
    width: calc(50% - 1rem);
  }

  ${s.break(130)} {
    width: calc(50% - 2rem);
    margin-bottom: 3rem;
  }
`

export const ContainerImg = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  width: 9rem;
  min-width: 9rem;
  height: 9rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const ContainerInfo = styled.div<{ bonus: string }>`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 100%;
  justify-content: start;

  ${({ bonus }) =>
    bonus === 'true' &&
    css`
      border: 0.2rem solid #7f1d1d;
      border-radius: 0.8rem;
      padding: 0.1rem 0.5rem 0.5rem 0.5rem;
    `};

  em {
    display: none;
    color: #7f1d1d;
    font-weight: 500;
    font-size: 1rem;
    ${({ bonus }) =>
      bonus === 'true' &&
      css`
        display: flex;
      `};
  }

  ${s.break(54)} {
    font-size: 1.2rem;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-weight: bold;
  color: #7f1d1d;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
  align-items: baseline;

  b {
    margin-right: 0.7rem;
  }

  ${s.break(54)} {
    font-size: 1.8rem;
  }
`

export const SubTitle = styled.h4`
  color: #34d399;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;

  ${s.break(54)} {
    font-size: 1.4rem;
  }
`

export const Text = styled.p`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.2;

  ${s.break(54)} {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`

export const ContainerCheckbox = styled.div`
  display: flex;
  height: fit-content;
  margin: auto 0.5rem auto -1rem;

  input {
    width: 1.8rem;
    height: 1.8rem;
  }
`
