'use client'

import { useEffect, useState } from 'react'

import { MdClose as IconClose } from 'react-icons/md'

import { Button } from 'components/atoms'

import { useToast } from 'hooks'

import S from './styles.module.scss'

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
        <div className={S.containerPopup}>
          <div className={S.wrapper}>
            <button
              aria-label="Fechar alerta"
              onClick={closePopup}
              className={S.button_close}
            >
              <IconClose className={S.icon_close} />
            </button>
            <img
              src="/icons/icon-72x72.png"
              width="50"
              height="50"
              alt="Pizzaria Toffanetto"
            />
            <img
              src="/img/logo-popup-pwa.png"
              alt="Pizzaria Toffanetto"
              width="257"
              height="40"
            />
          </div>
          <p className={S.text}>Adicione nosso App à tela inicial!</p>
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
