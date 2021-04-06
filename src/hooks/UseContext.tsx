import React, { useState, createContext, ReactNode, Dispatch } from 'react'

interface ObjectProvider {
  checked: boolean
  name: any
  size: any
  recommended: any
  point: any
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

interface ChallengeContextData {
  pizza1: ObjectProvider
  setPizza1: Dispatch<React.SetStateAction<ObjectProvider>>
  pizza2: ObjectProvider
  setPizza2: Dispatch<React.SetStateAction<ObjectProvider>>
  pizza3: ObjectProvider
  setPizza3: Dispatch<React.SetStateAction<ObjectProvider>>
  pizza4: ObjectProvider
  setPizza4: Dispatch<React.SetStateAction<ObjectProvider>>
  cart: string
  setCart: Dispatch<React.SetStateAction<string>>
  size: number[]
  setSize: any
  adBacon: number
  setAdBacon: Dispatch<React.SetStateAction<number>>
  adCalabreza: number
  setAdCalabreza: Dispatch<React.SetStateAction<number>>
  adMussarela: number
  setAdMussarela: Dispatch<React.SetStateAction<number>>
  adPalmito: number
  setAdPalmito: Dispatch<React.SetStateAction<number>>
  formData: FormDataProvider
  setFormData: Dispatch<React.SetStateAction<FormDataProvider>>
}

interface DataStorageProps {
  children: ReactNode
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: DataStorageProps) => {
  const objectPizza = {
    checked: false,
    name: '',
    size: '',
    recommended: '',
    point: ''
  }

  const [pizza1, setPizza1] = useState(objectPizza)
  const [pizza2, setPizza2] = useState(objectPizza)
  const [pizza3, setPizza3] = useState(objectPizza)
  const [pizza4, setPizza4] = useState(objectPizza)

  const [cart, setCart] = useState('')
  const [size, setSize] = useState([])

  const [adBacon, setAdBacon] = useState(0)
  const [adCalabreza, setAdCalabreza] = useState(0)
  const [adMussarela, setAdMussarela] = useState(0)
  const [adPalmito, setAdPalmito] = useState(0)

  const [formData, setFormData] = useState({})

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

        adBacon,
        setAdBacon,
        adCalabreza,
        setAdCalabreza,
        adMussarela,
        setAdMussarela,
        adPalmito,
        setAdPalmito,

        formData,
        setFormData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
