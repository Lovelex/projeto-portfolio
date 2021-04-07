<template>
  <v-form>
    <v-textarea
      :loading="updateProgress"
      v-model="item.text"
      label="Sobre mim"
    />
    <div class="d-flex justify-end mt-4">
      <v-btn
        :loading="updateProgress"
        @click="update"
        :disabled="!newChar"
        color="info"
      >
        Atualizar texto
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    newChar: false,
  }),
  computed: {
    ...mapGetters({
      item: `sobre/getItem`,
      updateProgress: `useUpdate/getUpdateProgress`,
      updateError: `useUpdate/getUpdateError`,
    }),
  },
  methods: {
    async update() {
      await this.$store.dispatch("useUpdate/update", {
        collection: "sobre",
        id: "items",
        item: {
          text: this.item.text,
        },
      });
      this.newChar = false
    },
  },
  watch: {
    "item.text"(x, y) {
      this.newChar = y ? true : false;
    },
  },
};
</script>

<style>
</style>