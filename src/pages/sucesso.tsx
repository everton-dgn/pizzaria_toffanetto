import { useContext } from 'react'
import { TitleSection, Steps, Cart } from 'components'
import * as S from 'styles/pages/success'
import Router from 'next/router'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { useCart } from 'hooks/UseCart'

const Sucesso = () => {
  const { additionals, cart, formData } = useContext(DataContext)

  const verifyRecommendation = [
    pizza1.checked && pizza1.recommended,
    pizza2.checked && pizza2.recommended,
    pizza3.checked && pizza3.recommended,
    pizza4.checked && pizza4.recommended
  ]

  const SendZap = async () => {
    await Router.push(
      `https://api.whatsapp.com/send?phone=55${
        formData.phone
      }&text=%0a*DADOS%20DO%20PEDIDO:*%0a%0a*Nome%20Completo:*%0a${
        formData.name
      }%0a%0a*E-mail:*%0a${formData.email}%0a%0a*Celular:*%0a${
        formData.phone
      }%0a%0a*Endereço:*%0a${formData.address?.street},%20${
        formData.address?.number
      }%20-%20${formData.address?.neighborhood}.%0a${
        formData.address?.city
      },%20${formData.address?.state}.%20${
        formData.address?.zipCode
      }.%0a%0a*Sabor(es):*%0a${pizza1.checked ? `• ${pizza1.name}%0a` : ''}${
        pizza2.checked ? `• ${pizza2.name}%0a` : ''
      }${pizza3.checked ? `• ${pizza3.name}%0a` : ''}${
        pizza4.checked ? `• ${pizza4.name}%0a` : ''
      }%0a*Tamanho:*%0a${pizza1.checked ? '• ' + pizza1.size + '%0a' : ''}${
        pizza2.checked ? '• ' + pizza2.size + '%0a' : ''
      }${pizza3.checked ? '• ' + pizza3.size + '%0a' : ''}${
        pizza4.checked ? '• ' + pizza4.size + '%0a' : ''
      }%0a*Adiconais:*%0a${additionals
        .filter(el => el.qtd > 0)
        .map(el => '• ' + el.qtd + ' x ' + el.name + '%0a')
        .join(',')
        .replace(/,+/g, '')}%0a*Recomendação%20do%20dia:*%0a${
        verifyRecommendation.includes(true)
          ? '• Sim! 😀. Você selecionou a recomendação do dia e acumulou ➕' +
            `${pizza1.point}` +
            ' pontos para a próxima compra!'
          : 'Não selecionada! 😐'
      }%0a%0a*TOTAL:*%0a${useCart(cart)}%0a`
    )
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
                  <li>{pizza1.checked && '• ' + pizza1.name}</li>
                  <li>{pizza2.checked && '• ' + pizza2.name}</li>
                  <li>{pizza3.checked && '• ' + pizza3.name}</li>
                  <li>{pizza4.checked && '• ' + pizza4.name}</li>
                </ul>
                <br />
                <S.Title>Tamanho:</S.Title>
                <li>{pizza1.checked && '• ' + pizza1.size}</li>
                <li>{pizza2.checked && '• ' + pizza2.size}</li>
                <li>{pizza3.checked && '• ' + pizza3.size}</li>
                <li>{pizza4.checked && '• ' + pizza4.size}</li>
                <br />
                <S.Title>Adiconais:</S.Title>
                <ul>
                  {additionals.map(
                    el =>
                      el.qtd > 0 && (
                        <li key={el.name}>
                          • {el.qtd} x {el.name}
                        </li>
                      )
                  )}
                </ul>
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Nome Completo:</S.Title>
                <p>{formData.name}</p>
                <br />
                <S.Title>E-mail:</S.Title>
                <S.Email>{formData.email}</S.Email>
                <br />
                <S.Title>Celular:</S.Title>
                <p>{formData.phone}</p>
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Endereço</S.Title>
                <p>{formData.address?.street},</p>
                <p>{formData.address?.number},</p>
                <p>{formData.address?.neighborhood}.</p>
                <p>{formData.address?.city},</p>
                <p>{formData.address?.state}.</p>
                <p>{formData.address?.zipCode}.</p>
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Recomendação do dia?</S.Title>
                {verifyRecommendation.includes(true) ? (
                  <p>
                    • Sim! 😀. Você selecionou a recomendação do dia e acumulou
                    <b>{` +${pizza1.point} `}</b>
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
