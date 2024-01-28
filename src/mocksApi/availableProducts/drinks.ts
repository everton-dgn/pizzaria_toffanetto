import type {
  ProductCategory,
  ProductList
} from 'infra/services/availableProducts/types'

const items: ProductList = [
  {
    id: 'okmwdfsiodfnin323',
    product: 'Água de Coco 300mL',
    description: 'Copo de 300mL',
    img: '/img/drinks/agua-de-coco-350ml.webp',
    hasFixedPrice: true,
    price: 5
  },
  {
    id: 'astgvasutyv9782390',
    product: 'Coca-Cola 350mL',
    description: 'Lata de 350mL',
    img: '/img/drinks/coca-cola-350ml.webp',
    hasFixedPrice: true,
    price: 4
  },
  {
    id: 'wdojkno8934b3rhb3',
    product: 'Guaraná Antarctica 350mL',
    description: 'Lata de 350mL',
    img: '/img/drinks/guarana-antarctica-350ml.webp',
    hasFixedPrice: true,
    price: 4
  },
  {
    id: '9034jb34ib34yihbdew',
    product: 'Guaraná Antarctica 1L',
    description: 'Garrafa de 1L',
    img: '/img/drinks/guarana-antarctica-1l.webp',
    hasFixedPrice: true,
    price: 6
  }
]

export const drinks: ProductCategory = {
  id: 'odfom89023ub23yugvsdijkbnsd97u23jb',
  category: 'Bebidas',
  items
}
