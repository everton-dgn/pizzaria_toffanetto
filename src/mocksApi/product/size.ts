import type { Size } from 'infra/services/product/types'

export const size: Size = {
  title: 'Selecione um Tamanho',
  description:
    'A pizza de mais de 1 sabor será cobrada pelo preço cheio do sabor mais caro.',
  isRequired: true,
  options: [
    {
      id: 'o3434o90j03jin34u',
      name: 'Mini',
      price: 19,
      slices: 4,
      quantityOfFlavors: 1
    },
    {
      id: '0134m3190n31eef23',
      name: 'Pequena',
      price: 29,
      slices: 4,
      quantityOfFlavors: 2
    },
    {
      id: 'dfn093nrubusubssd',
      name: 'Média',
      price: 39,
      slices: 6,
      quantityOfFlavors: 3
    },
    {
      id: 'didfn89033478343g',
      name: 'Grande',
      price: 49,
      slices: 8,
      quantityOfFlavors: 4
    },
    {
      id: '0i6ttgsdun3434344',
      name: 'Família',
      price: 59,
      slices: 12,
      quantityOfFlavors: 4
    }
  ]
}
