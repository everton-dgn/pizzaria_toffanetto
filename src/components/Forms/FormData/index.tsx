import { useRef, useContext } from 'react'
import * as S from 'components/Forms/FormData/styles'
import { Input, Select } from 'components'
import { FormHandles, Scope, SubmitHandler } from '@unform/core'
import * as Yup from 'yup'
import Router from 'next/router'
import { DataContext } from 'hooks/UseContext'
import { useValidate } from 'hooks/UseValidate'
import { Toast, NotifyError, NotifySuccess } from 'components/Toast'
import { toast } from 'react-toastify'

interface FormDataUnform {
  name?: string
  phone?: string
  email?: string
  address?: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: any
    zipCode: string
  }
}

export const FormData = () => {
  const { setFormData } = useContext(DataContext)

  const formRef = useRef<FormHandles>(null)

  const schema = useValidate()

  const handleSubmit: SubmitHandler<FormDataUnform> = async data => {
    try {
      formRef.current?.setErrors({})

      await schema.validate(data, { abortEarly: false })

      setFormData(data)

      // limpa fila de toasts
      toast.clearWaitingQueue()
      // remove toast ativo
      toast.dismiss()
      // mostra toast de sucesso
      NotifySuccess('Seus dados foram enviados com sucesso.', 'Sucesso!')

      await Router.push('/sucesso')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(({ message, path }) => {
          // @ts-ignore
          errorMessages[path] = message
        })

        formRef.current?.setErrors(errorMessages)

        // mostra toast de erro
        NotifyError('Corrija o preenchimento dos campos em destaque.', 'Erro!')
      }
    }
  }

  console.log('renderizou')

  return (
    <>
      <Toast />
      <S.TitleComponent>Dados do Cliente</S.TitleComponent>
      <S.Container>
        <S.Card>
          <S.FormFields ref={formRef} onSubmit={handleSubmit}>
            <S.ContentForm>
              <Input
                name="name"
                id="name"
                label="Nome Completo"
                type="text"
                placeholder="Nome Completo"
                autoFocus
                mask=""
              />

              <Input
                name="email"
                id="email"
                label="E-mail"
                type="email"
                placeholder="E-mail"
                mask=""
              />

              <Input
                name="phone"
                id="phone"
                label="(DDD) + Celular"
                type="text"
                placeholder="(DDD) + Celular"
                mask="(99) 99999-9999"
              />

              <Scope path="address">
                <Input
                  name="zipCode"
                  id="zipCode"
                  label="CEP"
                  type="text"
                  placeholder="CEP"
                  mask="99999-999"
                />

                <Input
                  name="street"
                  id="street"
                  label="Rua"
                  type="text"
                  placeholder="Rua"
                  mask=""
                />

                <Input
                  name="number"
                  id="number"
                  label="Número"
                  type="text"
                  placeholder="Número"
                  mask="9999999999"
                />

                <Input
                  name="neighborhood"
                  id="neighborhood"
                  label="Bairro"
                  type="text"
                  placeholder="Bairro"
                  mask=""
                />

                <Input
                  name="city"
                  id="city"
                  label="Cidade"
                  type="text"
                  placeholder="Cidade"
                  mask=""
                />

                <Select
                  name="state"
                  id="state"
                  label="Estado"
                  placeholder="Estado"
                />
              </Scope>
            </S.ContentForm>
            <S.BtnSend type="submit">Enviar</S.BtnSend>
          </S.FormFields>
        </S.Card>
      </S.Container>
    </>
  )
}
