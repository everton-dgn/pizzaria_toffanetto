import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      pizzas: [
        {
          id: 'pizza1',
          name: 'Calabreza',
          sizeAndPrice: [
            { size: 'Pequena', price: '19.99', slices: '4' },
            { size: 'Média', price: '29.99', slices: '6' },
            { size: 'Grande', price: '39.99', slices: '8' },
            { size: 'Família', price: '49.99', slices: '12' }
          ],
          img: 'calabreza',
          ingredients: 'Mussarela, calabresa e cebola, orégano.',
          recommendation: 'true',
          points: '360'
        },
        {
          id: 'pizza2',
          name: 'Mussarela',
          sizeAndPrice: [
            { size: 'Pequena', price: '19.99', slices: '4' },
            { size: 'Média', price: '29.99', slices: '6' },
            { size: 'Grande', price: '39.99', slices: '8' },
            { size: 'Família', price: '49.99', slices: '12' }
          ],
          img: 'mussarela',
          ingredients: 'Queijo mussarela e orégano.',
          recommendation: 'false',
          points: '360'
        },
        {
          id: 'pizza3',
          name: 'Napolitana',
          sizeAndPrice: [
            { size: 'Pequena', price: '19.99', slices: '4' },
            { size: 'Média', price: '29.99', slices: '6' },
            { size: 'Grande', price: '39.99', slices: '8' },
            { size: 'Família', price: '49.99', slices: '12' }
          ],
          img: 'napolitana',
          ingredients: 'Mussarela, tomate, orégano e parmesão ralado.',
          recommendation: 'false',
          points: '360'
        },
        {
          id: 'pizza4',
          name: 'peperone',
          sizeAndPrice: [
            { size: 'Pequena', price: '19.99', slices: '4' },
            { size: 'Média', price: '29.99', slices: '6' },
            { size: 'Grande', price: '39.99', slices: '8' },
            { size: 'Família', price: '49.99', slices: '12' }
          ],
          img: 'peperone',
          ingredients: 'Mussarela, orégano e pepperoni.',
          recommendation: 'false',
          points: '360'
        }
      ]
    }
  ])
}
