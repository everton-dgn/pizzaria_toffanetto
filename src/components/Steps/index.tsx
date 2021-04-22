import * as S from 'components/Steps/styles'
import Link from 'next/link'

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
            <Link href={activeStep[4] ? '/sucesso' : '/etapa-1'} passHref>
              <S.Step actived={activeStep[0]}>
                {activeStep[4] ? <S.Checked /> : '1'}
              </S.Step>
            </Link>
          </div>

          <div>
            <Link href={activeStep[4] ? '/sucesso' : '/etapa-2'} passHref>
              <S.Step actived={activeStep[1]}>
                {activeStep[4] ? <S.Checked /> : '2'}
              </S.Step>
            </Link>
          </div>

          <div>
            <Link href={activeStep[4] ? '/sucesso' : '/etapa-3'} passHref>
              <S.Step actived={activeStep[2]}>
                {activeStep[4] ? <S.Checked /> : '3'}
              </S.Step>
            </Link>
          </div>

          <div>
            <Link href={activeStep[4] ? '/sucesso' : '/etapa-4'} passHref>
              <S.Step actived={activeStep[3]}>
                {activeStep[4] ? <S.Checked /> : '4'}
              </S.Step>
            </Link>
          </div>
        </S.ContainerRounded>
      </S.ContainerSteps>
    </>
  )
}
