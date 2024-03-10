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
        <div className="invisible fixed left-auto right-0 top-60 z-elevation mx-16 h-fit max-w-[360px] animate-[visibility_0.1s_4s_linear_forwards,_move-up_0.4s_4s_ease-in_forwards] rounded-16 bg-white px-20 pb-28 pt-20 opacity-0 shadow-[0_0_24px_#00000054] container-col g-8">
          <div className="relative flex-nowrap center row">
            <button
              aria-label="Fechar alerta"
              onClick={closePopup}
              className="absolute -right-20 -top-20 flex size-[38px] min-h-[38px] min-w-[38px] cursor-pointer rounded-b-4 rounded-tl-4 rounded-tr-16 border-0 bg-transparent center"
            >
              <IconClose className="size-20 min-h-20 min-w-20 fill-grey-dark" />
            </button>
            <img
              src="/icons/icon-72x72.png"
              width="50"
              height="50"
              alt="Pizzaria Toffanetto"
              className="mr-10 max-w-[72%] object-contain"
            />
            <img
              src="/img/logos/logo-popup-pwa.png"
              alt="Pizzaria Toffanetto"
              width="257"
              height="40"
            />
          </div>
          <p className="mx-0 my-10 text-center text-18 font-600">
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
