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
      className="size-full obj-cover"
    />
  ) : (
    <p className="fs-sm-bold-dark">{getFirstAndLastInitialsUpperCase(name)}</p>
  )

export const Avatar = ({ name, imageUrl }: AvatarProps) => (
  <div
    className="bw-[1.5px]-secondary-500 relative flex size-8 bg-soft-white-blue br-circle center ov-hidden"
    role="figure"
  >
    <Content name={name} imageUrl={imageUrl} />
  </div>
)
