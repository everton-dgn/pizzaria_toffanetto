import { normalizeString } from 'data/formatters'

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
      className="size-full object-cover"
    />
  ) : (
    <p className="text-14 font-700 text-dark">
      {getFirstAndLastInitialsUpperCase(name)}
    </p>
  )

export const Avatar = ({ name, imageUrl }: AvatarProps) => (
  <div
    className="relative flex size-32 overflow-hidden rounded-circle border-[1.5px] border-secondary bg-soft-white-blue center"
    role="figure"
  >
    <Content name={name} imageUrl={imageUrl} />
  </div>
)
