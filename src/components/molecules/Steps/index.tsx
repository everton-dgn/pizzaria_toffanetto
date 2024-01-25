'use client'

import { useRouter } from 'next/navigation'

import { clsx } from 'clsx'
import { FaCheck as IconDone } from 'react-icons/fa'

import S from './styles.module.scss'

interface StepsProps {
  activeStep: boolean[]
}

export const Steps = ({ activeStep }: StepsProps) => {
  const { push } = useRouter()

  const redirectRouter = (routerLink: string, step: number) => {
    activeStep[step] && push(routerLink)
  }

  return (
    <div className={S.containerSteps}>
      <div className={S.containerLine}>
        <div
          style={{ backgroundColor: activeStep[1] ? '#7f1d1d' : '#e0e0ef' }}
          className={S.lineStep}
        />
        <div
          style={{ backgroundColor: activeStep[2] ? '#7f1d1d' : '#e0e0ef' }}
          className={S.lineStep}
        />
        <div
          style={{ backgroundColor: activeStep[3] ? '#7f1d1d' : '#e0e0ef' }}
          className={S.lineStep}
        />
      </div>

      <div className={S.containerRounded}>
        <div>
          <span
            className={clsx(S.step, activeStep[0] && S.active)}
            onClick={() => redirectRouter('/checkout/primeira-etapa', 0)}
          >
            {activeStep[4] ? <IconDone className={S.checked} /> : '1'}
          </span>
        </div>

        <div>
          <span
            className={clsx(S.step, activeStep[1] && S.active)}
            onClick={() => redirectRouter('/checkout/segunda-etapa', 1)}
          >
            {activeStep[4] ? <IconDone className={S.checked} /> : '2'}
          </span>
        </div>

        <div>
          <span
            className={clsx(S.step, activeStep[2] && S.active)}
            onClick={() => redirectRouter('/checkout/terceira-etapa', 2)}
          >
            {activeStep[4] ? <IconDone className={S.checked} /> : '3'}
          </span>
        </div>

        <div>
          <span
            className={clsx(
              /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
              S.step,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              activeStep[3] && S.active
            )}
            onClick={() => redirectRouter('/checkout/quarta-etapa', 3)}
          >
            {activeStep[4] ? <IconDone className={S.checked} /> : '4'}
          </span>
        </div>
      </div>
    </div>
  )
}
