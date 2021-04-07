// import masks from './masks'

export default {
  // mixins: [masks],
	data: () => ({
		rule: {
      required: v => !!v && !!v.length || "O campo deve ser preenchido",
      email: v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
      min: v => !!v && v.length >= 6 || "A senha dever ter no mínimo 6 caracteres",
      ddd: v => v.length === 2 || "DDD deve ter 2 dígitos",
      sms: v => v.length === 6 || "Código inválido",
      zip: v => v.length === 8 || "CEP inválido",
      cpf: v => !!v && v.length === 11 || "cpf inválido",
      phone: v => v.length >= 8 && v.length <= 9 || "Número do telefone inválido",
      onlyNumbers: v => !(/\D/g.test(v)) || "Apenas números são permitidos"
    }
	}),
	methods: {
		clearForm() {
			Object.assign(this.$data, this.$options.data.apply(this));
		}
	}
}