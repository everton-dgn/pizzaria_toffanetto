import styled from 'styled-components'
import { Check2 } from '@styled-icons/bootstrap'
import { c } from 'theme'

export const Checked = styled(Check2)`
  color: #374151;
  width: 2.7rem;
  height: 2.7rem;
`

export const ContainerSteps = styled(c.Container)`
  width: 100%;
  flex-direction: column;
  margin-top: 2rem;
`

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.1rem;
  justify-content: center;
  margin-top: 2.1rem;
  margin-bottom: -2.1rem;
`

export const LineStep = styled.div<{ actived: boolean }>`
  flex: 1;
  height: 0.4rem;
  background-color: ${({ actived }) => (actived ? '#7f1d1d' : '#e6e4f1')};
`

export const ContainerRounded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`

export const Step = styled.div<{ actived: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  z-index: 10;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: ${props => (props.actived ? '#34d399' : '#e6e4f1')};
`
