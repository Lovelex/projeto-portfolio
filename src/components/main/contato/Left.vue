<template>
  <div>
    <div class="d-flex justify-center mb-8">
      <span class="text-h4 font-weight-bold">Meu Contato</span>
    </div>
    <v-card color="primary" class="px-4 py-6">
      <div class="d-flex">
        <v-avatar size="112">
          <img :src="avatar.image" />
        </v-avatar>
        <v-divider style="opacity: 0.25" class="white mx-4" vertical />
        <div class="d-flex flex-column justify-center">
          <div class="d-flex mb-2" v-for="(item, i) in items" :key="i">
            <v-icon class="mr-2"> {{ item.icon.icon }} </v-icon>

            <div class="text-caption">
              <span v-if="item.value && item.icon.label !== 'E-mail'">{{ item.value }}</span>
              <a v-if="item.icon.label === 'E-mail'" :href="`mailto:${item.value}`" >
                <span class="white--text">{{ item.value }}</span>
              </a>
              <a v-if="item.url" :href="item.url" target="blank">
                <span class="white--text ">{{ item.icon.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const namespace = "contatos";
export default {
  computed: {
    ...mapGetters({
      items: `${namespace}/getItems`,
      avatar: `avatar/getItem`,
    }),
  },
};
</script>

<style>
</style>