<template>
  <div>
    <Drawer color="primary" :drawer="drawer" />
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-spacer/>
      <v-list color="primary" dense class="d-none d-md-flex">
        <v-list-item @click="goTo(item.to)" v-for="(item,i) in items" :to="item.to" :key="i"> 
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from "./Drawer";
import navItems from "@/mixins/navItems";
import anchors from '@/mixins/anchors'

export default {
  mixins: [navItems, anchors],
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
  },
};
</script>

<style>
</style>