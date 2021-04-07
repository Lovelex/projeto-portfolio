<template>
  <v-sheet :color="color" class="py-6">
    <v-container>
      <div v-if="title" class="d-flex justify-center mb-8">
        <span class="text-h4 font-weight-bold">{{ title }}</span>
      </div>
      <slot/>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    }, 
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>

</style>