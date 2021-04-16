import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export const useWriteToken = (name: string, value: string) => {
  // token expira em 1h
  const timeMinutesExpired = new Date(new Date().getTime() + 60 * 60 * 1000)

  return Cookies.set(name, value, {
    expires: timeMinutesExpired
  })
}

export const useReadToken = (name: string) => {
  const router = useRouter()

  const redirect = async () => {
    if (!Cookies.get(name)) {
      await router.push('/')
      return <div />
    }
  }
  redirect().then(r => r)
}

export const useRemoveAllTokens = () => {
  const listTokens = [
    'tokenPageStep2',
    'tokenPageStep3',
    'tokenPageStep4',
    'tokenPageSuccess'
  ]

  listTokens.forEach(el => Cookies.remove(el))
}
