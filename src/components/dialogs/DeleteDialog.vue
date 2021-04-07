<template>
  <v-dialog width="300" v-model="dialog.delete" :retain-focus="false">
    <v-card class="">
      <div class="red pa-4 white--text">
        <span class="font-weight-bold"
          >Deseja realmente remover esse item?</span
        >
      </div>
      <div class="d-flex justify-end mt-8 pa-4">
        <v-btn :loading="progress" @click="del" color="error">Deletar</v-btn>
        <v-btn @click="closeDeleteDialog" color="secondary" class="ml-2"
          >Fechar</v-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    namespace: {
      type: String,
      required: true,
    },
    collection: {
      type: String,
      required: true,
    },
  },
  computed: {
    item() {
      return this.$store.getters[`${this.namespace}/getItem`];
    },
    dialog() {
      return this.$store.getters[`${this.namespace}/getDialog`];
    },
    progress() {
      return this.$store.getters[`useDel/getDelProgress`];
    }
  },
  methods: {
    closeDeleteDialog() {
      this.$store.dispatch(`${this.namespace}/closeDeleteDialog`);
    },
    async del() {
      await this.$store.dispatch("useDel/del", { collection: this.collection, id: this.item.id });
      this.$store.dispatch(`${this.namespace}/closeDeleteDialog`)
    },
  },
};
</script>
