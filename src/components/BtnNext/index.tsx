import * as S from 'components/BtnNext/styles'
import { useWriteToken } from 'hooks/UseToken'
import Link from 'next/link'

interface Props {
  route: string
  text?: string
  disabled?: boolean
  token: {
    name: string
    value: string
  }
}

export const BtnNext = ({ route, text, disabled, token }: Props) => {
  const WriteToken = () => {
    useWriteToken(token.name, token.value)
  }

  const handleClick = () => {
    token !== undefined && WriteToken()
  }

  return (
    <>
      <S.ContainerBtn center={text}>
        <Link href={route}>
          <a onClick={handleClick}>
            <S.BtnNext disabled={disabled}>{text || 'Avançar'}</S.BtnNext>
          </a>
        </Link>
      </S.ContainerBtn>
    </>
  )
}
