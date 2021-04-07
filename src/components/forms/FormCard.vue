<template>
  <v-card class="pa-2">
    <div class="d-flex justify-end">
      <v-btn v-if="edit" @click="onUpdate" class="mr-2" elevation="1" fab small>
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      <v-btn @click="onDelete" elevation="1" fab small>
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </div>
    <slot />
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
    edit: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onUpdate() {
      this.$emit('onUpdate')
    },
    onDelete() {
      this.$emit('onDelete')
    }
  },
};
</script>

<style>
</style>