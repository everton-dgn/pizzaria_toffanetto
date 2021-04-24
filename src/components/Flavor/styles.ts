import styled, { css } from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 1.6rem;
  width: fit-content;
  animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.2s linear;

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

export const Card = styled.label<{ verifyCheck: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 #fff, 0.6rem 0.6rem 1.6rem 0 #e0e0ef;
  width: 100%;
  cursor: pointer;
  border: 0.2rem solid
    ${({ verifyCheck }) =>
      verifyCheck
        ? s.secondary
        : `
#f5f5ff`};
  transition: border-color 0.2s linear;
  opacity: 0;

  &:nth-child(1) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 100ms;
  }

  &:nth-child(2) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 300ms;
  }

  &:nth-child(3) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 500ms;
  }

  &:nth-child(4) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 700ms;
  }

  &:hover {
    border: 0.2rem solid ${s.secondary};
  }

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

  div {
    position: relative !important;
    width: 9rem;
    min-width: 9rem;
    height: 9rem;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-fit: cover;
  }
`

export const ContainerInfo = styled.div<{ bonus: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 100%;
  justify-content: start;

  ${({ bonus }) =>
    bonus &&
    css`
      border: 0.2rem solid #7f1d1d;
      border-radius: 0.8rem;
      padding: 0.1rem 0.5rem 0.5rem 0.5rem;
    `};

  em {
    display: none;
    color: #7f1d1d;
    font-size: 1.2rem;
    ${({ bonus }) =>
      bonus &&
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

export const Title = styled.h2`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-weight: 800;
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

export const SubTitle = styled.h3`
  color: #222;
  font-size: 1.2rem;
  font-weight: 600;
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

export const ContainerCheckbox = styled.div<{ verifyCheck: boolean }>`
  display: flex;
  height: fit-content;
  margin: auto 0.5rem auto -1rem;

  input {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    display: none;
  }

  & img:nth-child(1) {
    ${({ verifyCheck }) => verifyCheck && 'display: none;'}
  }

  & img:nth-child(2) {
    ${({ verifyCheck }) => !verifyCheck && 'display: none;'}
  }
`

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0 3rem 0;
`

export const Space = styled.div`
  width: 100%;
  max-width: 2rem;
`
