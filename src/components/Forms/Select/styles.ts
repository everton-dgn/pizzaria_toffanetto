import styled from 'styled-components'
import { s } from 'theme'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`

export const WrapperInput = styled.div<{
  error: string | undefined
  disabledField: boolean | undefined
}>`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  cursor: ${({ disabledField }) => (disabledField ? `no-drop` : `unset`)};
  background-color: ${({ disabledField }) =>
    disabledField ? `#e7e7f6` : s.bgDefault};
  box-shadow: ${({ disabledField }) =>
    disabledField
      ? `none`
      : `inset -0.3rem -0.3rem 0.9rem 0 #fff,
      inset 0.3rem 0.3rem 0.9rem 0 #e0e0ef`};

  #label {
    color: ${({ error }) => (error !== undefined ? s.errorColor : '#a0a6c6')};
    position: absolute;
    font-size: 1.5rem;
    margin: 1.4rem 1.4rem 1.3rem 1.5rem;
    border-radius: 0.4rem;
    background-color: ${s.bgDefault};
    cursor: unset;
    z-index: 0;
    transition: all 0.2s linear;
    opacity: 0;
  }

  & > div > div {
    box-shadow: none;
    border-radius: 1rem;
    border: 0.15rem solid
      ${({ error }) => (error !== undefined ? s.errorColor : 'transparent')};
    outline: none;
    padding: 0.6rem 0.4rem;
    background-color: transparent;
    font-size: 1.5rem;
    z-index: 1;
    color: ${({ error }) => (error !== undefined ? s.errorColor : s.textLabel)};
    transition: all 0.2s ease-in-out;

    & > div > div {
      font-size: 1.5rem;
      color: ${({ error }) => (error !== undefined ? s.errorColor : '#a0a6c6')};
    }

    &:hover {
      border: 0.15rem solid
        ${({ error }) => (error !== undefined ? s.errorColor : s.borderlight)};
    }
  }

  .focusSelect > div:nth-child(2) {
    border: 0.15rem solid
      ${({ error }) => (error !== undefined ? s.errorColor : s.borderSecondary)} !important;
  }

  .elevationLabel + #label {
    font-size: 1.15rem;
    color: ${({ error }) => (error !== undefined ? s.errorColor : s.textLabel)};
    cursor: default;
    z-index: 2;
    margin-left: 0;
    margin-top: -1.8rem;
    opacity: 1;
  }

  .elevationLabel > div:last-of-type > div:nth-child(1) > div {
    color: ${({ error }) => (error !== undefined ? s.errorColor : s.textLabel)};
  }

  .elevationLabel > div:nth-child(odd) {
    box-shadow: 0.3rem 0.4rem 2rem 0 #d7d7e7;
    background-color: ${s.bgDefault};

    & > div > div:hover {
      background-color: #e6e6f6;
    }

    .css-9gakcf-option {
      background-color: #d7d7e7;
    }
  }

  input {
    color: ${({ error }) =>
      error !== undefined ? s.errorColor : s.textLabel} !important;
  }

  svg:hover {
    fill: #a0a6c6;
  }
`

export const MsgError = styled.small<{ error: string | undefined }>`
  display: flex;
  color: ${s.errorColor};
  justify-content: flex-end;
  font-size: 1.15rem;
  height: 1.3rem;
  visibility: ${({ error }) => (error !== undefined ? 'visible' : 'hidden')};
`
