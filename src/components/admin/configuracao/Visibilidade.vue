<template>
  <v-card v-if="item && item.visibilidade" class="pa-4">
    <div class="d-flex">
      <span class="text-h6 mr-1">Visibilidade das seções</span>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" small>mdi-information-outline</v-icon>
        </template>
        <span class="font-weight-bold"
          >Define quais seções estarão visíveis para os usuários</span
        >
      </v-tooltip>
    </div>

    <div v-for="(value, key) in item.visibilidade" class="d-flex" :key="key">
      <v-icon class="mr-4">{{ value ? "mdi-eye" : "mdi-eye-off" }}</v-icon>
      <v-switch v-model="item.visibilidade[key]" :label="key" />
    </div>
  </v-card>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters["configuracoes/getItem"];
    },
  },
  methods: {
    bindData() {
      this.$store.dispatch(`configuracoes/bindItem`);
    },
    
  },
    created() {
      this.bindData();
    },
};
</script>

<style>
</style>