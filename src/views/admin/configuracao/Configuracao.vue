<template>
  <div>
    <AdminWrapper name="Configuracao">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <Visibilidade />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <Cor />
        </v-col>
      </v-row>
      <div class="my-4 d-flex justify-end">
        <v-btn :loading="progress" @click="update" color="info">Salvar</v-btn>
      </div>
    </AdminWrapper>
  </div>
</template>

<script>
import Cor from "../../../components/admin/configuracao/Cor.vue";
import Visibilidade from "../../../components/admin/configuracao/Visibilidade.vue";
export default {
  components: { Visibilidade, Cor },
  
  computed: {
    item() {
      return this.$store.getters["configuracoes/getItem"];
    },
    progress() {
      return this.$store.getters["useUpdate/getUpdateProgress"]
    },
    error() {
      return this.$store.getters["useUpdate/getUpdateError"]
    }
  },
  methods: {
    update() {
      this.$store.dispatch("useUpdate/update", {
        collection: "configuracoes",
        id: "items",
        item: this.item,
      });
    },
  },
};
</script>

<style>
</style>