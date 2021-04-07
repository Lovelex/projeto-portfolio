<template>
  <v-card class="pa-4">
    <span class="text-h6 mr-1">Cor Primária</span>
    <div class="my-2">
      <span class="text-caption">Tema do site</span>
      <v-chip-group active-class="info" v-model="item.isDark" class="d-flex align-center">
        <v-chip :value="false" class="mr-2">
          <v-icon class="mr-1">mdi-white-balance-sunny</v-icon>
          <span>Claro</span>
        </v-chip>
        <v-chip :value="true">
          <v-icon class="mr-1">mdi-moon-waning-crescent</v-icon>
          <span>Escuro</span>
        </v-chip>
      </v-chip-group>
    </div>
    <v-chip-group active-class="info" v-model="mode">
      <v-chip pill small outlined value="hexa">Hexadecimal</v-chip>
      <v-chip pill small outlined value="rgba">RGB</v-chip>
      <v-chip pill small outlined value="hsla">HLS</v-chip>
    </v-chip-group>
    <v-color-picker
      show-swatches
      swatches-max-height="50"
      :mode="mode"
      v-model="item.cor"
    />
  </v-card>
</template>

<script>
export default {
  data: () => ({
    mode: "hexa",
  }),
  computed: {
    item() {
      return this.$store.getters["configuracoes/getItem"];
    },
  },
};
</script>

<style>
</style>