<template>
  <v-form>
    <v-text-field v-model="item.formation" label="Sua Formação" />
    <v-text-field v-model="item.date" label="Data de sua formação" />
    <v-text-field v-model="item.institution" label="Instituição" />
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'formacoes/getItem'
    })
  }
}
</script>