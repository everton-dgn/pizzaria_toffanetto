import type { EdgeFlavor } from 'infra/services/product/types'

export const edgeFlavor: EdgeFlavor = {
  title: 'Selecione uma Borda',
  description: 'Escolha uma opção de recheio para a borda.',
  isRequired: true,
  options: [
    {
      id: 'lmdvpioer3434ok34jm34',
      name: 'Sem borda',
      price: 0.0
    },
    {
      id: 'onsdbnzb34bn3434jm35i',
      name: 'Borda de Catupiri',
      price: 5.0
    },
    {
      id: 'iueruioeroner0909erhj',
      name: 'Borda de Cheddar',
      price: 7.0
    },
    {
      id: 'poiwejasdb23349034234',
      name: 'Border de Mussarela',
      price: 8.0
    },
    {
      id: 'sdfjku23492383434b43b',
      name: 'Presunto e Queijo',
      price: 6.0
    }
  ]
}
