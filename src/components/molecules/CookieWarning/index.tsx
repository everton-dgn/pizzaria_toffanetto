'use client'

import { useEffect, useState } from 'react'

import { clsx } from 'clsx'

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
        <div
          className={clsx(
            S.container,
            'fixed inset-x-0 bottom-0 z-elevation mx-auto max-w-fit flex-nowrap bg-soft-white-blue p-16 text-left shadow-elevation-card center row g-16 xs:px-24 xs:py-16 sm:rounded-8'
          )}
        >
          <p className="text-12 xs:text-16">
            Ao navegar neste site, você aceita os cookies que usamos para
            melhorar a sua experiência.
          </p>
          <Button label="Aceitar" size="small" onClick={accepted} />
        </div>
      )}
    </>
  )
}
