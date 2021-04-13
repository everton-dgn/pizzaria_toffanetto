import React, { createContext, Dispatch, ReactNode, useState } from 'react'

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
  cart: number
  setCart: Dispatch<React.SetStateAction<number>>
  size: { price: number; size: string }
  setSize: Dispatch<React.SetStateAction<{ price: number; size: string }>>
  formData: FormDataProvider
  setFormData: Dispatch<React.SetStateAction<FormDataProvider>>
  additionals: AdditionalProps[]
  setAdditionals: Dispatch<React.SetStateAction<any>>
  flavor: any
  setFlavor: any
  accumulatedPoints: any
  setAccumulatedPoints: any
}

interface DataStorageProps {
  children: ReactNode
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: DataStorageProps) => {
  const [flavor, setFlavor] = useState([])

  const [additionals, setAdditionals] = useState([])

  const [size, setSize] = useState({ price: 0, size: '' })

  const [cart, setCart] = useState(0)

  const [accumulatedPoints, setAccumulatedPoints] = useState(0)

  const [formData, setFormData] = useState({})

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        size,
        setSize,

        formData,
        setFormData,

        additionals,
        setAdditionals,

        flavor,
        setFlavor,

        accumulatedPoints,
        setAccumulatedPoints
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
