<template>
  <div>
    <Section :style="gradient" title="Qualificações">
      <div :class="scroll">
        <div class="d-flex justify-sm-center">
          <v-card
            v-for="(item, i) in items"
            :key="i"
            class="pa-6 mx-2"
            width="124"
          >
            <div class="d-flex flex-column text-center">
              <span class="caption mb-2">{{ item.name }}</span>
              <span class="font-weight-bold">{{ item.level }}</span>
            </div>
          </v-card>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const namespace = "qualificacoes";

export default {
  computed: {
    ...mapGetters({
      items: `${namespace}/getItems`,
    }),
    configuracoes() {
      return this.$store.getters["configuracoes/getItem"];
    },
    gradient() {
      if (this.configuracoes.isDark) {
        return {
          "background-image": `linear-gradient(180deg, ${this.$vuetify.theme.themes.dark.l1} 63.5%, ${this.$vuetify.theme.themes.dark.l2} 37.5%)`,
        };
      }
      if (!this.configuracoes.isDark) {
        return {
          "background-image": `linear-gradient(180deg, ${this.$vuetify.theme.themes.light.l1} 63.5%, ${this.$vuetify.theme.themes.light.l2} 37.5%)`,
        };
      }
    },
    scroll() {
      if (this.$vuetify.breakpoint.xs) return "items";
    },
  },
};
</script>

<style scoped lang="scss">
.items {
  overflow-x: scroll;
}

::-webkit-scrollbar {
  height: 4px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgb(81, 69, 252);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(56, 42, 255);
}
</style>