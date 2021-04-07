<template>
  <div style="width: 60px">
    <v-select
      :disabled="disabled"
      label="Posição"
      @change="changePosition(value - 1, $event)"
      :value="value"
      :items="itemsCounter"
    />
  </div>
</template>

<script>
import itemsMixin from  '@/mixins/items'

export default {
  props: {
    collection: String,
    value: Number,
    items: Array
  },
  mixins: [itemsMixin]
};
</script>
