<template>
  <v-dialog :fullscreen="$vuetify.breakpoint.xs" width="80%" v-model="dialog.form" :retain-focus="false">
    <DeleteDialog :collection="collection" :namespace="namespace" />
    <v-card class="pa-4">
      <v-btn  @click="closeFormDialog" absolute right small elevation="1" fab>
        <v-icon> mdi-close </v-icon>
      </v-btn>
      <div class="pa-6">
        <slot />
      </div>
      <div class="d-flex mt-4 px-6">
        <v-btn color="error" v-if="mode === 'update'" @click="openDeleteDialog">
          <v-icon>mdi-delete</v-icon>
          <span v-if="!$vuetify.breakpoint.xs">Excluir</span>
        </v-btn>
        <v-spacer />
        <v-btn color="info" :loading="addProgress" v-if="mode === 'submit'" @click="add">
          <span>Adicionar</span>
        </v-btn>
        <v-btn
          color="warning"
          :loading="updateProgress"
          v-if="mode === 'update'"
          @click="update"
        >
          <span>Atualizar</span>
        </v-btn>
        <v-btn color="secondary" @click="closeFormDialog" class="ml-2">
          <span>Fechar</span>
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import DeleteDialog from "./DeleteDialog.vue";
export default {
  components: { DeleteDialog },
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
    dialog() {
      return this.$store.getters[`${this.namespace}/getDialog`];
    },
    mode() {
      return this.$store.getters[`${this.namespace}/getMode`];
    },
    item() {
      return this.$store.getters[`${this.namespace}/getItem`];
    },
    addProgress() {
      return this.$store.getters[`useAdd/getAddProgress`];
    },
    updateProgress() {
      return this.$store.getters[`useUpdate/getUpdateProgress`];
    },
  },
  methods: {
    closeFormDialog() {
      this.$store.dispatch(`${this.namespace}/closeFormDialog`);
    },
    openDeleteDialog() {
      this.$store.dispatch(`${this.namespace}/openDeleteDialog`);
    },
    async add() {
      await this.$store.dispatch("useAdd/add", {
        collection: this.collection,
        item: this.item,
      });
      this.closeFormDialog();
    },
    async update() {
      await this.$store.dispatch("useUpdate/update", {
        collection: this.collection,
        id: this.item.id,
        item: this.item,
      });
      this.closeFormDialog();
    },
  },
};
</script>

<style>
</style>