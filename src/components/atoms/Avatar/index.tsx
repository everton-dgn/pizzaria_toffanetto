import { normalizeString } from 'data/formatters'

import S from './styles.module.scss'

import type { AvatarProps } from './types'

const getFirstAndLastInitialsUpperCase = (name: string) => {
  const firstInitialRegex = /(\b\S)?/g
  const lastInitialRegex = /(^\S|\S$)?/g

  return normalizeString(name)
    ?.match(firstInitialRegex)
    ?.join('')
    ?.match(lastInitialRegex)
    ?.join('')
    ?.toUpperCase()
}

const Content = ({ imageUrl, name }: AvatarProps) =>
  imageUrl ? (
    <img
      src={imageUrl}
      alt={`Foto de ${name}`}
      title={`Foto de ${name}`}
      fetchPriority="high"
      className={S.image}
    />
  ) : (
    <p className={S.text}>{getFirstAndLastInitialsUpperCase(name)}</p>
  )

export const Avatar = ({ name, imageUrl }: AvatarProps) => (
  <div className={S.container} role="figure">
    <Content name={name} imageUrl={imageUrl} />
  </div>
)
