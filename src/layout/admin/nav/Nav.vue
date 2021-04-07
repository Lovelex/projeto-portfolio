<template>
  <div>
    <Drawer :drawer="drawer" />
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-btn elevation="1" class="ml-4" small fab @click="toggleDarkMode">
        <v-icon small> {{ $vuetify.theme.dark ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny" }} </v-icon>
      </v-btn>
      <v-spacer />
      <v-btn exact text :to="{ name: 'Home' }">
        <span>Voltar ao site</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from "./Drawer.vue";
export default {
  components: { Drawer },
  data: () => ({
    drawer: {
      isActive: true,
    },
  }),
  methods: {
    toggleDrawer() {
      this.drawer.isActive = !this.drawer.isActive;
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  created() {
    this.$vuetify.theme.dark = true
  }
};
</script>

<style>
</style>