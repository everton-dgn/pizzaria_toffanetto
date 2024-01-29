import { Badge } from 'components/atoms'

import S from './styles.module.scss'

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
    <section className={S.section}>
      <div className={S.section_header}>
        <div className={S.wrapper_section_title}>
          <h3 className={S.section_title}>{title}</h3>
          <Badge label={completed} color={colorCompleted} />
        </div>
        {description && <p className={S.section_description}>{description}</p>}
      </div>
      <div className={S.section_content}>{children}</div>
    </section>
  )
}
