import { useContext, useEffect } from 'react'
import * as S from 'components/Flavor/styles'
import { DataContext } from 'hooks/UseContext'
import * as C from 'components/BtnNext'
import Image from 'next/image'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

interface FlavorProps {
  data: [
    {
      id: string
      img: string
      ingredients: string
      name: string
      points: number
      recommendationDay: boolean
    }
  ]
}

export const Flavor = ({ data }: FlavorProps) => {
  const { flavor, setFlavor } = useContext(DataContext)

  // verifica se existe algum valor no sessionStorage, se true, grava no state flavor
  useEffect(() => getStorage('flavor') && setFlavor(getStorage('flavor')), [])

  // toda vez que alterar o state flavor grava seu valor no sessionStorage
  useEffect(() => setStorage('flavor', flavor), [flavor])

  const getFlavorById = (id: string, data: [{ id: string }]) => {
    return data.find(el => el.id === id)
  }

  const changeFlavorChecked = (id: string) => {
    const currentFlavorClicked = getFlavorById(id, data)

    // verifica se sabor clicado já está no state flavor
    const verifyItemInFlavorClicked = getFlavorById(id, flavor)

    if (verifyItemInFlavorClicked) {
      // remove do state o item clicado
      setFlavor(flavor.filter((el: { id: string }) => el.id !== id))
    } else {
      setFlavor([...flavor, currentFlavorClicked])
    }
  }

  return (
    <>
      <S.TitleComponent>Sabores</S.TitleComponent>
      <S.ContainerCard>
        {data.map(el => {
          const checked = !!getFlavorById(el.id, flavor)
          return (
            <S.Card key={el.id} verifyCheck={checked}>
              <S.ContainerCheckbox>
                <input
                  type="checkbox"
                  onClick={() => changeFlavorChecked(el.id)}
                  defaultChecked={checked}
                />
              </S.ContainerCheckbox>
              <S.ContainerImg>
                <Image
                  src={`/api-img/pizzas/${el.img}.jpg`}
                  alt="Imagem de uma pizza"
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                />
              </S.ContainerImg>
              <S.ContainerInfo bonus={el.recommendationDay}>
                <S.Title>
                  <b>PIZZA {el.name}</b> <em>(*Recomendação do dia)</em>
                </S.Title>
                <S.ContentInfo>
                  <S.SubTitle>Ingredientes:</S.SubTitle>
                  <S.Text>{el.ingredients}</S.Text>
                </S.ContentInfo>
              </S.ContainerInfo>
            </S.Card>
          )
        })}

        <C.BtnNext
          route={'/etapa-2'}
          disabled={flavor.length === 0}
          token={{
            name: 'tokenPageStep2',
            value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ0'
          }}
        />
      </S.ContainerCard>
    </>
  )
}
