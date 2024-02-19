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
  const colorCompleted = isDone ? 'green' : 'gray'

  return (
    <section className="col-full">
      <div className="ai-start border-white sticky top-0 z-base gap-4 border-y bg-soft-white-blue px-16 py-8 col-full sm:px-24 sm:py-12">
        <div className="flex-nowrap gap-16 jc-between ai-center row-full">
          <h3 className="text-16 font-700 uppercase text-primary sm:text-18">
            {title}
          </h3>
          <Badge label={completed} color={colorCompleted} />
        </div>
        {description && (
          <p className="text-12 font-600 text-grey-dark">{description}</p>
        )}
      </div>
      <div className="gap-12 px-16 py-12 col-full sm:px-24 sm:py-12">
        {children}
      </div>
    </section>
  )
}
