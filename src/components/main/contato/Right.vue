<template>
  <div>
    <div class="text-center mb-8">
      <span class="text-h4 font-weight-bold">Mande uma Mensagem</span>
    </div>
    <v-card :loading="addProgress">
      <v-form ref="form" class="pa-4">
        <v-text-field
          :rules="[rule.required]"
          validate-on-blur
          v-model="item.name"
          prepend-inner-icon="mdi-account"
          label="Seu Nome"
        />
        <v-text-field
          :rules="[rule.required, rule.email]"
          v-model="item.email"
          validate-on-blur
          prepend-inner-icon="mdi-email"
          label="Seu E-mail"
        />
        <v-textarea
          :rules="[rule.required]"
          v-model="item.message"
          validate-on-blur
          prepend-inner-icon="mdi-pencil"
          label="Mensagem"
        />
        <div>
          <v-btn :loading="addProgress" @click="add" color="primary" dark block>
            <span>Enviar Mensagem</span>
            <v-icon right> mdi-send </v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: {
      isNew: true,
      name: "",
      email: "",
      message: "",
    },
    namespace: "mensagens",
  }),
  computed: {
    addProgress() {
      return this.$store.getters[`useAdd/getAddProgress`];
    },
    addError() {
      return this.$store.getters[`useAdd/getAddError`];
    },
  },
  methods: {
    async add() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("useAdd/add", {
          collection: "mensagens",
          item: this.item,
        });
        if (!this.addError) {
          this.item = this.$options.data().item;
        }
      }
    },
  },
};
</script>

<style>
</style>