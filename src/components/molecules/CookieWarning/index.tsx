'use client'

import { useEffect, useState } from 'react'

import { Button } from 'components/atoms'

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
        <div className="invisible fixed inset-x-0 z-elevation mx-auto max-w-fit animate-[visibility_0.1s_3s_linear_forwards,_move-up_0.4s_3s_ease-in-out_forwards] flex-nowrap bg-soft-white-blue p-16 text-left opacity-0 shadow-elevation-card center row g-16 b-0 xs:px-24 xs:py-16 sm:rounded-8">
          <p className="fs-12 xs:fs-16">
            Ao navegar neste site, você aceita os cookies que usamos para
            melhorar a sua experiência.
          </p>
          <Button label="Aceitar" size="small" onClick={accepted} />
        </div>
      )}
    </>
  )
}
