<template>
  <v-form>
    <v-text-field v-model="item.title" label="Sua Experiência" />
    <v-text-field v-model="item.date" label="Duração de sua experiência" />
    <v-textarea v-model="item.text" label="Parágrafo" />
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'experiencias/getItem'
    })
  }
}
</script>