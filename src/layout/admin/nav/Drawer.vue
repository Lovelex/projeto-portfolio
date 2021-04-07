<template>
  <v-navigation-drawer disable-resize-watcher v-model="drawer.isActive" app>
      <v-list>
        <v-list-item
          :to="{ name: item.name }"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.label }}
            <v-badge v-if="item.label === 'Mensagem' && length > 0" class="ml-2" :content="length"/>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="py-4">
        <v-divider />
        <v-btn @click="logout" color="deep-orange" text>
          <v-icon left> mdi-logout </v-icon>
          <span>Deslogar</span>
        </v-btn>
      </div>
    
  </v-navigation-drawer>
</template>

<script>
import items from "@/mixins/adminNavItems";

const namespace = "useAuth"

export default {
  mixins: [items],
  props: {
    drawer: {
      type: Object,
    },
  },
  computed: {
    logoutError() {
      return this.$store.getters[`${namespace}/getLogoutError`]
    },
    length() {
      return this.$store.getters[`mensagens/getItemsWhereLength`]
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch( `${namespace}/logout`)
      if(!this.logoutError) {
        this.$router.push({ name: 'Login' })
      }
    }  
  }
};
</script>

<style>
</style>