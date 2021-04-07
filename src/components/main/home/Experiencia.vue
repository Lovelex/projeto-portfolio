<template>
  <div >
    <Section title="Experiências" color="l1">
      <div v-if="!$vuetify.breakpoint.xs">
        <v-timeline>
          <v-timeline-item small v-for="(item, i) in items" :key="i">
            <Card :item="item" />
          </v-timeline-item>
        </v-timeline>
      </div>
      <div v-if="$vuetify.breakpoint.xs">
        <Card class="my-4" v-for="(item, i) in items" :key="i" :item="item" />
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const namespace = "experiencias"

export default {
  computed: {
    ...mapGetters({
      items: `${namespace}/getItems`,
    }),
  },
};
</script>

<style>
</style>