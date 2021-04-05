import styled, { css } from 'styled-components'
import { s } from 'theme'

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: 3.5rem;
  padding-left: 0;
  padding-right: 0;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.boxShadowLight},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
  width: 100%;

  ${s.break(35)} {
    flex-direction: column;
    width: calc(50% - 1.3rem);
    margin-bottom: 2.5rem;
  }

  ${s.break(113.5)} {
    flex-direction: row;
    width: calc(50% - 2rem);
    margin-bottom: 3.5rem;
  }
`

export const ContainerImg = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 25rem;
  max-height: 25rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${s.break(113.5)} {
    min-width: 25rem;
  }

  ${s.break(128)} {
    min-width: 30rem;
  }
`

export const ContainerInfo = styled.div<{ bonus: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
  height: 100%;

  ${({ bonus }) =>
    bonus === 'true' &&
    css`
      border: 0.2rem solid ${s.primary};
      border-radius: 0.8rem;
      padding: 0.1rem 0.5rem 0.5rem 0.5rem;
    `};

  em {
    margin-top: 0.5rem;
    display: none;
    font-size: 1.4rem;
    ${props =>
      props.bonus === 'true' &&
      css`
        display: flex;
        color: ${s.primary};
        font-weight: 500;
      `};
  }

  ${s.break(113.5)} {
    margin-left: 2rem;
    margin-top: 0;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-weight: bold;
  color: ${s.primary};
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  width: fit-content;

  &:after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 30%;
    background-color: ${s.secondary};
    margin-top: 0.6rem;
    border-radius: 1rem;
  }
`

export const SubTitle = styled.h4`
  color: ${s.secondary};
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

export const Text = styled.p`
  font-size: 1.6rem;
  margin-top: 0;
`

export const ButtonCard = styled.button`
  background-color: ${s.secondary};
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-weight: bold;
  border-radius: 1rem;
  font-size: 1.6rem;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${s.secondaryHover};
  }

  ${s.breakMax(180.9)} {
    margin-top: 0.8rem;
  }
`
