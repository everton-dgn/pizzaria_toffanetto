import React, { useState, createContext, ReactNode, Dispatch } from 'react'

interface ObjectProvider {
  checked: any
  name: any
  size: any
  recommended: any
  point: any
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
  cart: any
  setCart: any
  size: any
  setSize: any
  adBacon: any
  setAdBacon: any
  adCalabreza: any
  setAdCalabreza: any
  adMussarela: any
  setAdMussarela: any
  adPalmito: any
  setAdPalmito: any
  formData: any
  setFormData: any
}

interface DataStorageProps {
  children: ReactNode
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: DataStorageProps) => {
  const objectPizza = {
    checked: null,
    name: null,
    size: null,
    recommended: null,
    point: null
  }

  const [pizza1, setPizza1] = useState(objectPizza)
  const [pizza2, setPizza2] = useState(objectPizza)
  const [pizza3, setPizza3] = useState(objectPizza)
  const [pizza4, setPizza4] = useState(objectPizza)

  const [cart, setCart] = useState(false)
  const [size, setSize] = useState([])

  const [adBacon, setAdBacon] = useState(0)
  const [adCalabreza, setAdCalabreza] = useState(0)
  const [adMussarela, setAdMussarela] = useState(0)
  const [adPalmito, setAdPalmito] = useState(0)

  const [formData, setFormData] = useState('')

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
