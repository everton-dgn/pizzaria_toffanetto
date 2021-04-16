import React from 'react'
import * as S from 'components/BtnNext/styles'
import { useRouter } from 'next/router'
import { useWriteToken } from 'hooks/UseToken'

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
  const router = useRouter()

  const WriteToken = () => {
    useWriteToken(token.name, token.value)
  }

  const handleClick = async () => {
    token !== undefined && WriteToken()
    await router.push(route)
  }

  return (
    <>
      <S.ContainerBtn center={text}>
        <S.BtnNext onClick={handleClick} disabled={disabled}>
          {text || 'Avançar'}
        </S.BtnNext>
      </S.ContainerBtn>
    </>
  )
}
