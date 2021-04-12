import React, { createContext, Dispatch, ReactNode, useState } from 'react'

interface ObjectProvider {
  checked: boolean
  name: string
  size: number
  recommended: any
  point: string
}

interface FormDataProvider {
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

interface AdditionalProps {
  id: string
  name: string
  price: number
  qtd: number
  qtdMax: number
  img: string
}

interface ChallengeContextData {
  pizza1: ObjectProvider
  setPizza1: Dispatch<React.SetStateAction<ObjectProvider>>
  pizza2: ObjectProvider
  setPizza2: Dispatch<React.SetStateAction<ObjectProvider>>
  pizza3: ObjectProvider
  setPizza3: Dispatch<React.SetStateAction<ObjectProvider>>
  pizza4: ObjectProvider
  setPizza4: Dispatch<React.SetStateAction<ObjectProvider>>
  cart: number
  setCart: Dispatch<React.SetStateAction<number>>
  size: { price: number; size: string }
  setSize: Dispatch<React.SetStateAction<{ price: number; size: string }>>
  formData: FormDataProvider
  setFormData: Dispatch<React.SetStateAction<FormDataProvider>>
  additionals: AdditionalProps[]
  setAdditionals: Dispatch<React.SetStateAction<any>>
}

interface DataStorageProps {
  children: ReactNode
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: DataStorageProps) => {
  const objectPizza = {
    checked: false,
    name: '',
    size: 0,
    recommended: '',
    point: ''
  }

  const [pizza1, setPizza1] = useState(objectPizza)
  const [pizza2, setPizza2] = useState(objectPizza)
  const [pizza3, setPizza3] = useState(objectPizza)
  const [pizza4, setPizza4] = useState(objectPizza)

  const [cart, setCart] = useState(0)
  const [size, setSize] = useState({ price: 0, size: '' })

  const [formData, setFormData] = useState({})

  const [additionals, setAdditionals] = useState([])

  return (
    <DataContext.Provider
      value={{
        pizza1,
        setPizza1,
        pizza2,
        setPizza2,
        pizza3,
        setPizza3,
        pizza4,
        setPizza4,

        cart,
        setCart,
        size,
        setSize,

        formData,
        setFormData,

        additionals,
        setAdditionals
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
