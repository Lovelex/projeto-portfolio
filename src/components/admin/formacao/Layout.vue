<template>
  <div>
    <div class="d-flex">
      <div class="mb-2 mr-4">
        <v-icon class="mr-1" x-small> mdi-clock </v-icon>
        <span class="caption">
          {{ item.createdAt | moment }}
        </span>
      </div>
      <div class="mb-2">
        <v-icon class="mr-1" x-small> mdi-pencil </v-icon>
        <span class="caption">
          {{ item.updatedAt | moment }}
        </span>
      </div>
    </div>
    <div>
      <div>
        <span class="mr-2">Formação:</span>
        <span>{{ item.formation }}</span>
      </div>
      <div>
        <span class="mr-2">Data:</span>
        <span>{{ item.date }}</span>
      </div>
      <div>
        <span class="mr-2">Instituição:</span>
        <span>{{ item.institution }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
</style>