<template>
  <div>
    <Dialog :collection="collection" :namespace="namespace">
      <FormExperiencias />
    </Dialog>
    <Dialog :collection="collection" formMode="delete" :namespace="namespace" />
    <AdminWrapper name="Experiencia">
      <v-btn @click="openInSubmitMode" absolute top right fab color="info">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
      <div class="d-flex">
        <v-row>
          <v-col cols="12" sm="6" v-for="(item, i) in items" :key="item.id">
            <v-card class="pa-2 ma-2">
              <SelectPosition :collection="collection" :value="i+1" :items="items"/>
              <Layout :item="item" />
              <div class="d-flex justify-end mt-4">
                <v-btn
                  @click="openInUpdateMode(item)"
                  depressed
                  small
                  fab
                  color="warning"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
                <v-btn
                  class="ml-2"
                  @click="openInDeleteMode(item)"
                  depressed
                  small
                  fab
                  color="error"
                >
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </AdminWrapper>
  </div>
</template>

<script>
import Layout from "../../../components/admin/experiencia/Layout";
import Dialog from "../../../components/dialogs/Dialog.vue";
import FormExperiencias from "../../../components/forms/Experiencia.vue";

export default {
  components: { FormExperiencias, Dialog, Layout },
  data: () => ({
    namespace: "experiencias",
    collection: "expereiências",
  }),
  computed: {
    items() {
      return this.$store.getters[`${this.namespace}/getItems`];
    },
  },
  methods: {
    bindItems() {
      this.$store.dispatch(`${this.namespace}/bindItems`);
    },
    openInSubmitMode() {
      this.$store.dispatch(`${this.namespace}/openInSubmitMode`);
    },
    openInUpdateMode(item) {
      this.$store.dispatch(`${this.namespace}/openInUpdateMode`, item);
    },
    openInDeleteMode(item) {
      this.$store.dispatch(`${this.namespace}/openInDeleteMode`, item);
    },
  },
  created() {
    this.bindItems();
  },
};
</script>

