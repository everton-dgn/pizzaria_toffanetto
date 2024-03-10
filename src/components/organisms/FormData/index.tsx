// @ts-nocheck
'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'

import axios from 'axios'

import { useToast } from 'hooks'

interface FormDataUnform {
  name?: string
  phone?: string
  email?: string
  address?: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}

/* const statesOptions = [
  { value: 'AC', label: 'AC' },
  { value: 'AL', label: 'AL' },
  { value: 'AP', label: 'AP' },
  { value: 'AM', label: 'AM' },
  { value: 'BA', label: 'BA' },
  { value: 'CE', label: 'CE' },
  { value: 'DF', label: 'DF' },
  { value: 'ES', label: 'ES' },
  { value: 'GO', label: 'GO' },
  { value: 'MA', label: 'MA' },
  { value: 'MT', label: 'MT' },
  { value: 'MS', label: 'MS' },
  { value: 'MG', label: 'MG' },
  { value: 'PA', label: 'PA' },
  { value: 'PB', label: 'PB' },
  { value: 'PR', label: 'PR' },
  { value: 'PE', label: 'PE' },
  { value: 'PI', label: 'PI' },
  { value: 'RJ', label: 'RJ' },
  { value: 'RN', label: 'RN' },
  { value: 'RS', label: 'RS' },
  { value: 'RO', label: 'RO' },
  { value: 'RR', label: 'RR' },
  { value: 'SC', label: 'SC' },
  { value: 'SP', label: 'SP' },
  { value: 'SE', label: 'SE' },
  { value: 'TO', label: 'TO' }
] */

export const FormData = () => {
  const { setFormData } = useContext(DataContext)
  const formRef = useRef<any | null>(null)
  const router = useRouter()
  const toast = useToast()

  // const [selectState, setSelectState] = useState('')
  // const [loadZipCode, setLoadZipCode] = useState(false)
  const [disabledField, setDisabledField] = useState(true)

  const SearchCep = useCallback(async (params: string, server = 0) => {
    setLoadZipCode(true)

    // Lista de servidores
    const servers = [
      `https://brasilapi.com.br/api/cep/v1/${params}`,
      `https://viacep.com.br/ws/${params}/json`,
      `https://ws.apicep.com/cep/${params}.json`
    ]

    // eslint-disable-next-line promise/catch-or-return
    axios
      .get(
        // @ts-expect-error
        servers[server]
      )
      .then(({ data }) => {
        const state = data.state || data.uf

        if (!state) {
          toast.error('CEP inválido ou não encontrado.')
        }

        formRef.current?.setFieldValue(
          'address.street',
          data.street || data.address || data.logradouro
        )
        formRef.current?.setFieldValue(
          'address.neighborhood',
          data.neighborhood || data.district || data.bairro
        )
        formRef.current?.setFieldValue(
          'address.city',
          data.city || data.localidade
        )
        // eslint-disable-next-line promise/always-return
        setSelectState(data.state || data.uf)
      })
      .catch(() => {
        if (servers[server + 1]) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          SearchCep(params, server + 1)
        } else {
          toast.error('CEP inválido ou não encontrado.')
        }
      })
      .finally(() => {
        setLoadZipCode(false)
        setDisabledField(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (getStorage('form')) {
      formRef.current?.setFieldValue('name', getStorage('form').name)
      formRef.current?.setFieldValue('email', getStorage('form').email)
      formRef.current?.setFieldValue('phone', getStorage('form').phone)
      formRef.current?.setFieldValue(
        'address.zipCode',
        getStorage('form').address.zipCode
      )
      // eslint-disable-next-line @typescript-eslint/no-floating-promises,promise/catch-or-return
      SearchCep(getStorage('form').address.zipCode).then(r => r)
      formRef.current?.setFieldValue(
        'address.street',
        getStorage('form').address.street
      )
      formRef.current?.setFieldValue(
        'address.number',
        getStorage('form').address.number
      )
      formRef.current?.setFieldValue(
        'address.neighborhood',
        getStorage('form').address.neighborhood
      )
      formRef.current?.setFieldValue(
        'address.city',
        getStorage('form').address.city
      )
      setSelectState(getStorage('form').address.state)
    }
  }, [SearchCep])

  // gera cookies de acesso para a página de sucesso
  const WriteToken = () => {
    writeToken('tokenPageSuccess', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
  }

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const handleSubmit: SubmitHandler<FormDataUnform> = async data => {
    try {
      formRef.current?.setErrors({})

      // @ts-expect-error
      setFormData(data)
      setStorage('form', data)

      toast.success('Seus dados foram enviados com sucesso.')

      WriteToken()

      router.push('/sucesso')
    } catch (err) {
      const errorMessages = {}

      err.inner.forEach(({ message, path }) => {
        // @ts-expect-error
        errorMessages[path] = message
      })

      formRef.current?.setErrors(errorMessages)

      toast.error('Corrija o preenchimento dos campos em destaque.')
    }
  }

  return (
    <>
      <h1>Dados do Cliente</h1>
      <section>
        <div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              {/* <Input */}
              {/*  name="name" */}
              {/*  id="name" */}
              {/*  label="Nome Completo" */}
              {/*  type="text" */}
              {/*  placeholder="Nome Completo" */}
              {/* /> */}

              {/* <Input */}
              {/*  name="email" */}
              {/*  id="email" */}
              {/*  label="E-mail" */}
              {/*  type="email" */}
              {/*  placeholder="E-mail" */}
              {/* /> */}

              {/* <Input */}
              {/*  name="phone" */}
              {/*  id="phone" */}
              {/*  label="(DDD) + Celular" */}
              {/*  type="text" */}
              {/*  placeholder="(DDD) + Celular" */}
              {/* /> */}

              {/* <Input */}
              {/*  name="zipCode" */}
              {/*  id="zipCode" */}
              {/*  label="CEP" */}
              {/*  type="text" */}
              {/*  placeholder="CEP" */}
              {/*  onKeyPress={SearchCep} */}
              {/*  load={loadZipCode} */}
              {/* /> */}

              {/* <Input */}
              {/*  name="street" */}
              {/*  id="street" */}
              {/*  label="Rua" */}
              {/*  type="text" */}
              {/*  placeholder="Rua" */}
              {/*  load={loadZipCode} */}
              {/*  disabled={disabledField} */}
              {/* /> */}

              {/* <Input */}
              {/*  name="number" */}
              {/*  id="number" */}
              {/*  label="Número" */}
              {/*  type="text" */}
              {/*  placeholder="Número" */}
              {/* /> */}

              {/* <Input */}
              {/*  name="neighborhood" */}
              {/*  id="neighborhood" */}
              {/*  label="Bairro" */}
              {/*  type="text" */}
              {/*  placeholder="Bairro" */}
              {/*  load={loadZipCode} */}
              {/*  disabled={disabledField} */}
              {/* /> */}

              {/* <Input */}
              {/*  name="city" */}
              {/*  id="city" */}
              {/*  label="Cidade" */}
              {/*  type="text" */}
              {/*  placeholder="Cidade" */}
              {/*  load={loadZipCode} */}
              {/*  disabled={disabledField} */}
              {/* /> */}

              {/* <Select */}
              {/*  name="state" */}
              {/*  id="state" */}
              {/*  label="Estado" */}
              {/*  type="text" */}
              {/*  placeholder="Estado" */}
              {/*  options={statesOptions} */}
              {/*  setStateInSelect={selectState} */}
              {/*  disabledField={disabledField} */}
              {/* /> */}
            </div>
            <button type="submit" disabled={disabledField}>
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
