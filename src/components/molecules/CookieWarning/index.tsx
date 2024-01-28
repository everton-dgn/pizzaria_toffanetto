'use client'

import { useEffect, useState } from 'react'

import { Button } from 'components/atoms'

import S from './styles.module.scss'

export const CookieWarning = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    localStorage.getItem('acceptedCookies')
      ? setIsActive(false)
      : setIsActive(true)
  }, [])

  const accepted = () => {
    localStorage.setItem('acceptedCookies', 'sim')
    setIsActive(false)
  }

  return (
    <>
      {isActive && (
        <div className={S.container}>
          <p className={S.text}>
            Ao navegar neste site, você aceita os cookies que usamos para
            melhorar a sua experiência.
          </p>
          <Button label="Aceitar" size="small" onClick={() => accepted()} />
        </div>
      )}
    </>
  )
}
