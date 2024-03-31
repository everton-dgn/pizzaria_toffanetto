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
        <div className="invisible fixed inset-x-0 z-elevation mx-auto max-w-fit animate-[visibility_0.1s_3s_linear_forwards,_move-up_0.4s_3s_ease-in-out_forwards] bg-soft-white-blue p-4 opacity-0 shadow-elevation-card b-0 center f-nowrap g-4 row tx-left xs:px-6 xs:py-4 sm:br-lg">
          <p className="fs-xs xs:fs-base">
            Ao navegar neste site, você aceita os cookies que usamos para
            melhorar a sua experiência.
          </p>
          <Button label="Aceitar" size="small" onClick={accepted} />
        </div>
      )}
    </>
  )
}
