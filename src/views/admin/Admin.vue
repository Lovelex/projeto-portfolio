<template>
  <div>
    <Snack admin />
    <Nav />
    <router-view class="mt-8 mb-16" />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/layout/admin/nav/Nav";
import Footer from "@/layout/admin/footer/Footer";

export default {
  components: { Nav, Footer },
  computed: {
    length() {
      return this.$store.getters["mensagens/getItemsWhereLength"];
    },
  },
  methods: {
    bindItems() {
      this.$store.dispatch("mensagens/bindItemsWhere");
    },
  },
  watch: {
    length(actV, newV) {
      if (newV) {
        if(actV > newV) {
          this.$store.dispatch("snackAdmin/setSnack", {
            mode: "info",
            text: "Você recebeu uma nova mensagem."
          })
        }
      }
    },
  },
  created() {
    this.bindItems();
  },
};
</script>

<style>
</style>