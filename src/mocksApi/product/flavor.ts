import type { Flavor } from 'infra/services/product/types'

const sizePricingTraditionalPizza = {
  mini: 19,
  small: 29,
  medium: 39,
  big: 49,
  family: 59
}

const sizePricingSweetPizza = {
  mini: 22,
  small: 32,
  medium: 42,
  big: 52,
  family: 62
}

export const flavor: Flavor = {
  title: 'Personalizar Sabores',
  description: 'Escolha sabores adicionais para sua pizza.',
  isRequired: false,
  options: [
    {
      id: 'o3434o90j03jin34u',
      name: 'Pizza Calabresa',
      sizePricing: sizePricingTraditionalPizza,
      description:
        'Mussarela, molho especial, alho, azeitona, pimentão, milho, cebola, ervilha, orégano, tomate, azeite, pepperoni, pimenta-do-reino e catupiri'
    },
    {
      id: '0134m3190n31eef23',
      name: 'Pizza Mussarela',
      sizePricing: sizePricingTraditionalPizza,
      description:
        'Queijo mussarela, azeitona, molho de tomate, alho, cebola, azeite e orégano'
    },
    {
      id: 'dfn093nrubusubssd',
      name: 'Pizza Napolitana',
      sizePricing: sizePricingTraditionalPizza,
      description:
        'Mussarela, tomate, cebola, molho de tomate, azeite, orégano e parmesão ralado'
    },
    {
      id: 'didfn89033478343g',
      name: 'Pizza Peperoni',
      sizePricing: sizePricingTraditionalPizza,
      description:
        'Mussarela, alho, azeitona, molho de tomate, azeite, orégano e pepperoni'
    },
    {
      id: 'wodfkfwojknduojn24',
      name: 'Pizza Romeu e Julieta',
      sizePricing: sizePricingSweetPizza,
      description: 'Queijo, goiabada e leite condensado'
    },
    {
      id: 'oknojknasi89233nj',
      name: 'Pizza Banana',
      sizePricing: sizePricingSweetPizza,
      description: 'Banana, canela, leite condensado, coco e leite em pó'
    },
    {
      id: '00sd8sduhsdhjweiohj',
      name: 'Pizza Chocolate',
      sizePricing: sizePricingSweetPizza,
      description:
        'Chocolate derretido, leite condensado, leite em pó e chocolate granulado'
    },
    {
      id: 'sd0ds0oj9uioub34',
      name: 'Pizza Confete',
      sizePricing: sizePricingSweetPizza,
      description: 'Confete, leite condensado e chocolate derretido'
    }
  ]
}
