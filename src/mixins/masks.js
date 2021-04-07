export default {
  data:() => ({
    cpf: {
      placeholder: '___.___.___-__',
      mask: '###.###.###-##',
    },
    cnpj: {
      placeholder: '__.___.___/____-__', 
      mask: '##.###.###/####-##',
    },
    phone: {
      placeholder: '(__) _____-____',
      mask: '(##) #####-####'
    },
    date: {
      placeholder: '__/__/____',
      mask: '##/##/####'
    },
    cep: {
      placeholder: '______-___',
      mask: '######-###'
    }
  })
}