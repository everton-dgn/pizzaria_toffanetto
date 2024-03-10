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
      <div className="sticky top-0 z-base border-y border-white bg-soft-white-blue px-16 py-8 ai-start col-full g-4 sm:px-24 sm:py-12">
        <div className="flex-nowrap jc-between ai-center row-full g-16">
          <h3 className="text-16 font-700 uppercase text-primary-500 sm:text-18">
            {title}
          </h3>
          <Badge label={completed} color={colorCompleted} />
        </div>
        {description && (
          <p className="text-12 font-600 text-grey-dark">{description}</p>
        )}
      </div>
      <div className="px-16 py-12 col-full g-12 sm:px-24 sm:py-12">
        {children}
      </div>
    </section>
  )
}
