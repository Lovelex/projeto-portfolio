<template>
  <v-card elevation="4" class="pa-4">
    <div class="d-flex flex-column align-center align-md-start">
      <span class="font-weight-bold mb-2 text-h5">{{ item.title }}</span>
      <span style="opacity: 0.5" class="text-caption font-weight-medium">{{
        item.date
      }}</span>
      <span class="text-caption font-weight-medium">{{ item.text }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>