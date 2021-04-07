<template>
  <v-navigation-drawer
    :color="color"
    app
    :dark="dark"
    v-model="drawer.isActive"
  >
    <v-list>
      <div
        style="height: 100%"
        class="d-flex flex-column justify-space-between"
      >
        <v-list-item
          @click="goTo(item.to)"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
        <v-btn @click="toAdmin" v-if="user"> Ir para Admin </v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import navItems from "@/mixins/navItems";
import anchors from "@/mixins/anchors";

export default {
  mixins: [navItems, anchors],
  props: {
    drawer: {
      type: Object,
      required: true,
    },
    dark: {
      type: Boolean,
    },
    color: {
      type: String,
    },
  },
  computed: {
    user() {
      return this.$auth.currentUser
    }
  },
  methods: {
    toAdmin() {
      if(this.$auth.currentUser) {
        return this.$router.push({ name: 'Admin' })
      }
    },
    
  }
};
</script>

<style>
</style>