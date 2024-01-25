'use client'

import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

import { AiOutlineWhatsApp as IconWhatsapp } from 'react-icons/ai'
import { getStorage } from 'utils/HandleSessionStorage'
import { removeAllTokens } from 'utils/HandleToken'

import { Button, TitleSection } from 'components/atoms'
import { Cart, Steps } from 'components/molecules'

import { useCart } from 'hooks/UseCart'
import { DataContext } from 'hooks/UseContext'

import S from './styles.module.scss'

const Success = () => {
  const { push } = useRouter()

  const {
    additionals,
    setAdditionals,
    cart,
    setCart,
    // @ts-expect-error
    formData: { address, email, name, phone },
    setFormData,
    flavor,
    setFlavor,
    size,
    setSize
  } = useContext(DataContext)

  // if (!readToken('tokenPageSuccess') && typeof window !== 'undefined') {
  //   return (window.location.href = '/')
  // }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // @ts-expect-error
    getStorage('flavor') && setFlavor(getStorage('flavor'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // @ts-expect-error
    getStorage('size') && setSize(getStorage('size'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // @ts-expect-error
    getStorage('cart') && setCart(getStorage('cart'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // @ts-expect-error
    getStorage('additionals') && setAdditionals(getStorage('additionals'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // @ts-expect-error
    getStorage('form') && setFormData(getStorage('form'))
  }, [setAdditionals, setCart, setFlavor, setFormData, setSize])

  const getPontuation = () => {
    return flavor.find(
      (el: { recommendationDay: boolean }) => el.recommendationDay
    )?.points
  }

  // @ts-expect-error
  const arrayAdditionals = additionals.filter(
    (el: { qtd: number }) => el.qtd > 0
  )

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const form = address !== undefined ? Object.entries(address) : []

  const flavorList = flavor
    .map((el: { name: string }) => `• ${el.name}%0a`)
    .join(',')
    .replace(/,+/g, '')

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const formList = form.map(el => `%0a ${el[1]}`)

  const additionalsList =
    arrayAdditionals.length !== 0
      ? '%0a*Adiconais:*%0a' +
        arrayAdditionals
          .map((el: { qtd: any; name: any }) => `• ${el.qtd} x ${el.name}%0a`)
          .join(',')
          .replace(/,+/g, '')
      : ''

  const pontuationText =
    getPontuation() > 0
      ? '• Sim! 😀. Você selecionou a recomendação do dia e acumulou ➕' +
        `${getPontuation()} pontos para a próxima compra!`
      : 'Não selecionada! 😐'

  const SendZap = () => {
    // não exceder 2.083 caracteres na url! (valores atuais possíveis de serem gerados são menores que 1000)
    window.location.href =
      `https://api.whatsapp.com/send?phone=55${phone}&text=%0a` +
      `*DADOS%20DO%20PEDIDO:*%0a%0a*Nome%20Completo:*%0a${name}%0a%0a` +
      `*E-mail:*%0a${email}%0a%0a*Celular:*%0a${phone}%0a%0a` +
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `*Endereço:*${formList}.%0a%0a*Sabor(es):*%0a${flavorList}%0a` +
      `*Tamanho:*%0a•%20${
        // @ts-expect-error
        size.size
      }%0a${additionalsList}%0a` +
      `*Recomendação%20do%20dia:*%0a${pontuationText}%0a%0a` +
      `*TOTAL:*%0a${useCart(
        // @ts-expect-error
        cart
      )}%0a`

    // remove todos os tokens caso retorne para essa página após enviar o pedido
    removeAllTokens()

    sessionStorage.clear()
  }

  return (
    <>
      <Steps activeStep={[true, true, true, true, true]} />
      <TitleSection title="Confirmar Envio do pedido" />
      <Cart />
      <div className={S.container}>
        <h1 className={S.titleComponent}>Resumo do Pedido</h1>
        <section className={S.containerSuccess}>
          <div className={S.card}>
            <div className={S.cardContent}>
              <div className={S.containerList}>
                <h2 className={S.title}>Sabor(es):</h2>
                <ul>
                  {flavor.map((el: { name: string }) => (
                    <li key={el.name}>{'• ' + el.name}</li>
                  ))}
                </ul>
                <br />
                <h2 className={S.title}>Tamanho:</h2>
                <li>
                  {
                    // @ts-expect-error
                    '• ' + size.size
                  }
                </li>
                <br />
                {arrayAdditionals.length !== 0 && (
                  <>
                    <h2 className={S.title}>Adiconais:</h2>
                    <ul>
                      {arrayAdditionals.map((el: any) => (
                        <li key={el.name}>
                          • {el.qtd} x {el.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className={S.containerList}>
                <h2 className={S.title}>Nome Completo:</h2>
                <p>{name}</p>
                <br />
                <h2 className={S.title}>E-mail:</h2>
                <p>{email}</p>
                <br />
                <h2 className={S.title}>Celular:</h2>
                <p>{phone}</p>
              </div>
              <div className={S.containerList}>
                <h2 className={S.title}>Endereço</h2>
                {form.map(el => (
                  <p key={el[0]}>{el[1] as any}.</p>
                ))}
              </div>
              <div className={S.containerList}>
                <h2 className={S.title}>Recomendação do dia?</h2>
                {getPontuation() > 0 ? (
                  <p>
                    • Sim! 😀. Você selecionou a recomendação do dia e acumulou
                    <b>{` +${getPontuation()} `}</b>
                    pontos para a próxima compra!
                  </p>
                ) : (
                  <p>• Não selecionada! 😐</p>
                )}
              </div>
            </div>

            <button className={S.btnSend} onClick={SendZap}>
              Enviar pedido pelo WhatsApp <IconWhatsapp className={S.zap} />
            </button>
          </div>
        </section>
        <div className={S.wrapperBtn}>
          <Button
            label="VOLTAR"
            onClick={() => push('/checkout/quarta-etapa')}
          />
          <Button label="Ir para Página Inicial" onClick={() => push('/')} />
        </div>
      </div>
    </>
  )
}

export default Success
