'use client'

import { useEffect, useState } from 'react'

import { MdClose as IconClose } from 'react-icons/md'

import { Button } from 'components/atoms'

import { useToast } from 'hooks'

import type { BeforeInstallPromptEvent } from './types'

const MESSAGE_WITHDRAWN =
  'Explore o melhor do nosso App! Acesso rápido e offline, sempre que precisar. Só atualizar a página e clicar em "Instalar"'

export const PopupInstallPwa = () => {
  const [isInstallPromptRejected, setIsInstallPromptRejected] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const toast = useToast()

  const isShowPopup = isActive && !isInstallPromptRejected

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      if (!isInstallPromptRejected) {
        setDeferredPrompt(e as BeforeInstallPromptEvent)
        setIsActive(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closePopup = () => setIsActive(false)

  const handleInstallPwa = async () => {
    closePopup()

    await deferredPrompt?.prompt()

    const choiceResult = await deferredPrompt?.userChoice
    if (choiceResult?.outcome === 'dismissed') {
      setIsInstallPromptRejected(true)
      toast.info(MESSAGE_WITHDRAWN)
    }
    setDeferredPrompt(null)
  }

  return (
    <>
      {isShowPopup && (
        <div className="t-15 invisible fixed z-elevation mx-4 h-fit max-w-xs animate-[visibility_0.1s_4s_linear_forwards,_move-up_0.4s_4s_ease-in_forwards] bg-white px-5 pb-7 pt-5 opacity-0 shadow-[0_0_24px_#00000054] br-2xl container-col r-0 l-auto g-2">
          <div className="relative center f-nowrap row">
            <button
              aria-label="Fechar alerta"
              onClick={closePopup}
              className="absolute flex cursor-pointer bg-transparent br-b br-tl br-tr-4 bw-0 -t-5 -r-5 center min-size-10"
            >
              <IconClose className="fill-grey-dark min-size-5" />
            </button>
            <img
              src="/icons/icon-72x72.png"
              width="50"
              height="50"
              alt="Pizzaria Toffanetto"
              className="mr-2.5 max-w-[72%] obj-contain"
            />
            <img
              src="/img/logos/logo-popup-pwa.png"
              alt="Pizzaria Toffanetto"
              width="257"
              height="40"
            />
          </div>
          <p className="mx-0 my-2.5 fs-lg-semibold tx-center">
            Adicione nosso App à tela inicial!
          </p>
          <Button
            label="ADICIONAR ATALHO"
            onClick={handleInstallPwa}
            size="large"
            isFullWidth
          />
        </div>
      )}
    </>
  )
}
