import React from 'react'
import * as S from 'components/BtnNext/styles'
import { useRouter } from 'next/router'

interface Props {
  route: string
  text?: string
  disabled?: boolean
}

export const BtnNext = ({ route, text, disabled }: Props) => {
  const router = useRouter()

  return (
    <>
      <S.ContainerBtn center={text}>
        <S.BtnNext onClick={() => router.push(route)} disabled={disabled}>
          {text || 'Avançar'}
        </S.BtnNext>
      </S.ContainerBtn>
    </>
  )
}
