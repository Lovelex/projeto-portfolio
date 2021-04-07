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
        <span class="mr-2">Ícone:</span>
        <v-icon>{{ item.icon.icon }}</v-icon>
      </div>
      <div>
        <span class="mr-2">Valor:</span>
        <span class="text-caption">{{item.value || item.url}}</span>
      </div>
      <div>
        <span class="mr-2">Tipo:</span>
        <span
          ><a target="blank" :href="item.url">{{ item.icon.label }}</a></span
        >
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