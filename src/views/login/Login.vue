<template>
  <div id="login">
    <v-container class="d-flex justify-center">
      <v-sheet class="mt-12" width="500">
        <div class="d-flex justify-center mb-8">
          <v-img max-width="112" src="@/assets/svg/logo-fire-stacks.svg" />
        </div>
          {{loginError}}
        <v-card :loading="loginProgress" elevation="8">
          <div class="deep-orange pa-4 d-flex justify-center">
            <span class="white--text font-weight-bold text-h5">Login</span>
          </div>
          <div class="pa-8">
            <v-form>
              <div class="mb-12">
                <v-text-field
                  v-model="user.email"
                  label="E-mail"
                  prepend-inner-icon="mdi-email"
                />
                <v-text-field
                  v-model="user.password"
                  label="Senha"
                  :type="type"
                  @click:append="toggleType"
                  prepend-inner-icon="mdi-key"
                  :append-icon="type === 'password' ? 'mdi-eye-off' : 'mdi-eye'"
                />
              </div>
              <div>
                <v-btn :loading="loginProgress" @click="login" dark color="deep-orange" block>
                  <span>Entrar</span>
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
const namespace = "useAuth";

export default {
  data: () => ({
    type: "password",
    user: {
      email: "teste@teste.com",
      password: "123456",
    },
  }),
  computed: {
    loginError() {
      return this.$store.getters[`${namespace}/getLoginError`];
    },
    loginProgress() {
      return this.$store.getters[`${namespace}/getLoginProgress`];
    },
  },
  methods: {
    toggleType() {
      const password = "password";
      const text = "text";

      if (this.type === password) return (this.type = text);
      if (this.type === text) return (this.type = password);
    },
    async login() {
      await this.$store.dispatch(`${namespace}/login`, this.user)
      if(!this.loginError) {
        this.$router.push({ name: 'Admin' })
      }
    },
  },
};
</script>

<style>
#login {
  min-height: 100vh;
}
</style>