type Size = 'small' | 'medium'

export type TypeMessage = 'info' | 'error' | 'success' | 'warning'

export type InfoMessageProps = {
  message: string
  type: TypeMessage
  size?: Size
}

export type ContainerProps = {
  type: TypeMessage
  size?: Size
}
