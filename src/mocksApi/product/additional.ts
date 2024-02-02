import type { Additional } from 'infra/services/product/types'

export const additional: Additional = {
  title: 'Selecione um adicional',
  description: 'Escolha uma porção adicional de recheio para a sua pizza.',
  isRequired: false,
  options: [
    {
      id: 'jwe2334n349o349034ntg',
      name: 'Sem adicional',
      price: 0.0
    },
    {
      id: 'prfvj9hv478gbvb7ssxvgb',
      name: 'Bacon - 200g',
      price: 9.0
    },
    {
      id: 'rfun97230dcbsxcbzxcxuj',
      name: 'Calabresa - 200g',
      price: 7.0
    },
    {
      id: 'nzx834b5r0dflh2b23j234',
      name: 'Mussarela - 200g',
      price: 9.0
    },
    {
      id: 'ednm38nnsdkwsd0ruiilsd',
      name: 'Palmito - 200g',
      price: 6.0
    }
  ]
}
