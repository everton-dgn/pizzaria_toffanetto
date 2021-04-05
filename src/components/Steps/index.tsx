import React from 'react'
import * as S from 'components/Steps/styles'

interface StepsProps {
  activeStep: boolean[]
}

export const Steps = ({ activeStep }: StepsProps) => {
  return (
    <>
      <S.ContainerSteps>
        <S.ContainerLine>
          <S.LineStep actived={activeStep[1]} />
          <S.LineStep actived={activeStep[2]} />
          <S.LineStep actived={activeStep[3]} />
        </S.ContainerLine>

        <S.ContainerRounded>
          <div>
            <S.Step actived={activeStep[0]}>
              {activeStep[4] ? <S.Checked /> : '1'}
            </S.Step>
          </div>

          <div>
            <S.Step actived={activeStep[1]}>
              {activeStep[4] ? <S.Checked /> : '2'}
            </S.Step>
          </div>

          <div>
            <S.Step actived={activeStep[2]}>
              {activeStep[4] ? <S.Checked /> : '3'}
            </S.Step>
          </div>

          <div>
            <S.Step actived={activeStep[3]}>
              {activeStep[4] ? <S.Checked /> : '4'}
            </S.Step>
          </div>
        </S.ContainerRounded>
      </S.ContainerSteps>
    </>
  )
}
