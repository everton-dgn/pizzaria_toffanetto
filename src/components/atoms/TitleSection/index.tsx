import S from './styles.module.scss'

interface TitleSectionProps {
  title: string
}

export const TitleSection = ({ title }: TitleSectionProps) => (
  <div className={S.container}>
    <h1 className={S.titleSection}>{title}</h1>
  </div>
)
