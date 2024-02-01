import type { Size } from 'infra/services/product/types'

export const size: Size = {
  title: 'Selecione um Tamanho',
  description:
    'A pizza de mais de 1 sabor será cobrada pelo preço cheio do sabor mais caro.',
  isRequired: true,
  options: [
    {
      id: 'o3434o90j03jin34u',
      name: 'Mini - 4 fatias',
      value: 'mini',
      price: 19,
      quantityOfFlavors: 1
    },
    {
      id: '0134m3190n31eef23',
      name: 'Pequena - 4 fatias',
      value: 'small',
      price: 29,
      quantityOfFlavors: 2
    },
    {
      id: 'dfn093nrubusubssd',
      name: 'Média - 6 fatias',
      value: 'medium',
      price: 39,
      quantityOfFlavors: 3
    },
    {
      id: 'didfn89033478343g',
      name: 'Grande - 8 fatias',
      value: 'big',
      price: 49,
      quantityOfFlavors: 4
    },
    {
      id: '0i6ttgsdun3434344',
      name: 'Família - 12 fatias',
      value: 'family',
      price: 59,
      quantityOfFlavors: 4
    }
  ]
}
