import styled from 'styled-components'

export const ContainerCart = styled.div`
  margin-left: auto;
  color: #222;
  margin-bottom: 0.2rem;
  display: flex;

  & > div {
    display: flex !important;
    align-items: center;
  }

  img {
    transform: translateY(0.3rem);
  }
`

export const Cart = styled.h1`
  text-align: right;
  font-size: 2.2rem;
  font-weight: 600;
  color: #7f1d1d;
  border: 0.2rem solid #34d399;
  border-radius: 1rem;
  padding: 1rem;
  width: fit-content;
  margin: 0 0 1.6rem 1rem;

  b {
    color: #222;
    font-weight: 600;
    margin-left: 0.5rem;
  }
`
