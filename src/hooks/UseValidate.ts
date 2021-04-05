import * as Yup from 'yup'

export const useValidate = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Mínimo de 2 caracteres.')
      .max(50, 'Máximo de 50 caracteres')
      .required('Preenchimento obrigatório!'),
    email: Yup.string()
      .lowercase('Digite apenas letras minúsculas.')
      .strict()
      .min(8, 'Mínimo de 8 caracteres.')
      .email('Digite um E-mail válido!')
      .required('Preenchimento obrigatório!'),
    phone: Yup.string()
      .min(10, 'Mínimo de 10 caracteres.')
      .max(11, 'Máximo de 11 caracteres')
      .required('Preenchimento obrigatório!'),
    address: Yup.object().shape({
      zipCode: Yup.string()
        .min(8, 'Mínimo de 8 caracteres.')
        .max(8, 'Máximo de 8 caracteres')
        .required('Preenchimento obrigatório!'),
      street: Yup.string()
        .min(2, 'Mínimo de 2 caracteres.')
        .max(50, 'Máximo de 50 caracteres')
        .required('Preenchimento obrigatório!'),
      number: Yup.string()
        .min(1, 'Mínimo de 1 caracteres.')
        .max(7, 'Máximo de 7 caracteres')
        .required('Preenchimento obrigatório!'),
      neighborhood: Yup.string()
        .min(2, 'Mínimo de 2 caracteres.')
        .max(50, 'Máximo de 50 caracteres')
        .required('Preenchimento obrigatório!'),
      city: Yup.string()
        .min(3, 'Mínimo de 3 caracteres.')
        .max(50, 'Máximo de 50 caracteres')
        .required('Preenchimento obrigatório!'),
      state: Yup.string().required('Preenchimento obrigatório!')
    })
  })
}
