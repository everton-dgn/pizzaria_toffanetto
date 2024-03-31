import { Badge } from 'components/atoms'

import type { SectionProductProps } from './types'

export const SectionProduct = ({
  children,
  title,
  description,
  isRequired,
  isDone
}: SectionProductProps) => {
  const required = isRequired ? 'Obrigatório' : 'Opcional'
  const completed = isDone ? 'Concluído' : required
  const colorCompleted = isDone ? 'green' : 'grey'

  return (
    <section className="col-full">
      <div className="bw-y-white sticky z-base bg-soft-white-blue px-4 py-2 ai-start col-full t-0 g-1 sm:px-6 sm:py-[3px]">
        <div className="ai-center f-nowrap g-4 jc-between row-full">
          <h3 className="uppercase fs-base fw-bold tx-primary-500 sm:fs-lg">
            {title}
          </h3>
          <Badge label={completed} color={colorCompleted} />
        </div>
        {description && (
          <p className="fs-xs-semibold-grey-dark">{description}</p>
        )}
      </div>
      <div className="px-4 py-[3px] col-full g-3 sm:px-6 sm:py-[3px]">
        {children}
      </div>
    </section>
  )
}
