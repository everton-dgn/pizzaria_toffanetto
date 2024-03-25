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
      <div className="sticky z-base border-y border-white bg-soft-white-blue px-16 py-8 g-4 t-0 ai-start col-full sm:px-24 sm:py-12">
        <div className="row-full flex-nowrap g-16 ai-center jc-between">
          <h3 className="uppercase text-primary-500 fw-700 fs-16 sm:fs-18">
            {title}
          </h3>
          <Badge label={completed} color={colorCompleted} />
        </div>
        {description && (
          <p className="text-grey-dark fw-600 fs-12">{description}</p>
        )}
      </div>
      <div className="px-16 py-12 g-12 col-full sm:px-24 sm:py-12">
        {children}
      </div>
    </section>
  )
}
