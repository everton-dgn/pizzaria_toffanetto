import React, { useContext } from 'react'
import { TitleSection, Steps, Cart } from 'components'
import * as S from 'styles/pages/success'
import { useRouter } from 'next/router'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { useCart } from 'hooks/UseCart'
import Cookies from 'js-cookie'
import { useReadToken, useRemoveAllTokens } from 'hooks/UseToken'

const Sucesso = () => {
  const {
    additionals,
    cart,
    formData: { address, email, name, phone },
    accumulatedPoints,
    flavor,
    size
  } = useContext(DataContext)

  const router = useRouter()

  // redireciona para página inicial se o formulário não foi enviado
  useReadToken('tokenPageSuccess')

  const arrayAdditionals = additionals.filter(el => el.qtd > 0)

  const form = address !== undefined ? Object.entries(address) : []

  const SendZap = async () => {
    await router.push(
      `https://api.whatsapp.com/send?phone=55${phone}&text=%0a*DADOS%20DO%20PEDIDO:*%0a%0a*Nome%20Completo:*%0a${name}%0a%0a*E-mail:*%0a${email}%0a%0a*Celular:*%0a${phone}%0a%0a*Endereço:*${form.map(
        el => `%0a ${el[1]}`
      )}.%0a%0a*Sabor(es):*%0a${flavor
        .filter((el: { checked: boolean }) => el.checked)
        .map((el: { name: string }) => `• ${el.name}%0a`)
        .join(',')
        .replace(/,+/g, '')}%0a*Tamanho:*%0a${'• ' + size.size + '%0a'}${
        arrayAdditionals.length !== 0
          ? '%0a*Adiconais:*%0a' +
            arrayAdditionals
              .map(el => '• ' + el.qtd + ' x ' + el.name + '%0a')
              .join(',')
              .replace(/,+/g, '')
          : ''
      }%0a*Recomendação%20do%20dia:*%0a${
        accumulatedPoints > 0
          ? '• Sim! 😀. Você selecionou a recomendação do dia e acumulou ➕' +
            `${accumulatedPoints}` +
            ' pontos para a próxima compra!'
          : 'Não selecionada! 😐'
      }%0a%0a*TOTAL:*%0a${useCart(cart)}%0a`
    )

    Cookies.remove('tokenPageSuccess')
    useRemoveAllTokens()
  }

  return (
    <>
      <Steps activeStep={[true, true, true, true, true]} />
      <TitleSection title="Confirmar Envio do pedido" />
      <Cart />
      <c.Container>
        <S.TitleComponent>Resumo do Pedido</S.TitleComponent>
        <S.ContainerSuccess>
          <S.Card>
            <S.CardContent>
              <S.ContainerList>
                <S.Title>Sabor(es):</S.Title>
                <ul>
                  {flavor
                    .filter((el: { checked: boolean }) => el.checked)
                    .map((el: { name: string }) => (
                      <li key={el.name}>{'• ' + el.name}</li>
                    ))}
                </ul>
                <br />
                <S.Title>Tamanho:</S.Title>
                <li>{'• ' + size.size}</li>
                <br />
                {arrayAdditionals.length !== 0 && (
                  <>
                    <S.Title>Adiconais:</S.Title>
                    <ul>
                      {arrayAdditionals.map(el => (
                        <li key={el.name}>
                          • {el.qtd} x {el.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Nome Completo:</S.Title>
                <p>{name}</p>
                <br />
                <S.Title>E-mail:</S.Title>
                <p>{email}</p>
                <br />
                <S.Title>Celular:</S.Title>
                <p>{phone}</p>
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Endereço</S.Title>
                {form.map(el => (
                  <p key={el[0]}>{el[1]}.</p>
                ))}
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Recomendação do dia?</S.Title>
                {accumulatedPoints > 0 ? (
                  <p>
                    • Sim! 😀. Você selecionou a recomendação do dia e acumulou
                    <b>{` +${accumulatedPoints} `}</b>
                    pontos para a próxima compra!
                  </p>
                ) : (
                  <p>• Não selecionada! 😐</p>
                )}
              </S.ContainerList>
            </S.CardContent>

            <S.BtnSend onClick={SendZap}>
              Enviar pedido pelo WhatsApp <S.Zap />
            </S.BtnSend>
          </S.Card>
        </S.ContainerSuccess>
      </c.Container>
    </>
  )
}

export default Sucesso
