<template>
  <v-form>
    <v-text-field v-model="item.name" label="Nome para sua qualificação" />
    <v-text-field v-model="item.level" label="Nível da sua qualificação" />
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'qualificacoes/getItem'
    })
  }
}
</script>