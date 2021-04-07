<template>
  <div>
    <Dialog :collection="collection" formMode="delete" :namespace="namespace" />

    <AdminWrapper name="Mensagem">
      <v-text-field
        class="mt-4"
        prepend-inner-icon="mdi-magnify"
        label="Procurar..."
        dense
        hide-details
        outlined
        v-model="search"
      />
      <div v-if="!items.length" class="my-8 d-flex justify-center">
        <span class="font-weight-bold text-h4"> Você não tem mensagens </span>
      </div>
      <div class="d-flex">
        <v-row>
          <v-col cols="12" v-for="item in newItems" :key="item.id">
            <v-card :elevation="item.isNew ? '8' : '2'"  class="pa-2 ma-2">
              
              <Layout :item="item" />
              <div class="d-flex justify-end mt-4">
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
      <v-pagination
        v-model="actPage"
        color="info"
        :length="pagTotal"
        class="mb-10"
      />
    </AdminWrapper>
  </div>
</template>

<script>
import Layout from "../../../components/admin/mensagem/Layout";
import Dialog from "../../../components/dialogs/Dialog.vue";

export default {
  components: { Dialog, Layout },
  data: () => ({
    namespace: "mensagens",
    collection: "mensagens",
    limit: 4,
    actPage: 1,
    search: "",
  }),
  computed: {
    items() {
      const items = this.$store.getters["mensagens/getItems"];
      return items.filter((item) => {
        return (
          item.name.includes(this.search) || item.message.includes(this.search)
        );
      });
    },
    newItems() {
      return this.items.slice(this.initial, this.end);
    },
    itemsLength() {
      return this.items.length;
    },
    pagTotal() {
      return Math.ceil(this.itemsLength / this.limit);
    },
    initial() {
      return this.actPage * this.limit - this.limit;
    },
    end() {
      return this.initial + this.limit;
    },
  },
  methods: {
    bindItems() {
      this.$store.dispatch(`${this.namespace}/bindItemsOrderBy`);
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