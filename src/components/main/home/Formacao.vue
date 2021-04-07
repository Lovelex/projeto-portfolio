<template>
  <div>
    <Section title="Formações" color="l2">
      <div>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
            <v-card height="100%" color="primary" class="pa-4">
              <div class="d-flex flex-column align-center align-md-start">
                <span class="font-weight-bold mb-2 text-h5">{{
                  item.formation
                }}</span>
                <span
                  style="opacity: 0.5"
                  class="text-caption font-weight-medium"
                  >{{ item.date }}</span
                >
                <span class="text-caption font-weight-medium">{{
                  item.institution
                }}</span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const namespace = "formacoes"

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