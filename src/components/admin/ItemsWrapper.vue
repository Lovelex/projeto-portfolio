<template>
  <v-card class="pa-4">
    <v-btn @click="onOpen" v-if="add" fab absolute top right>
      <v-icon> mdi-plus </v-icon>
    </v-btn>
    <slot/>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    add: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onOpen() {
      this.$emit('onOpen')
    }
  }
};
</script>

<style>
</style>