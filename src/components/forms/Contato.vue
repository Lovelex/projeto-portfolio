<template>
  <v-form>
    <v-text-field
      v-if="item.icon.label !== 'E-mail' && item.icon.label !== 'Telefone' && item.icon.label !== 'Whatsapp'"
      v-model="item.url"
      :label="`Url do ${item.icon.label}`"
    />
    <v-text-field
      v-if="item.icon.label === 'E-mail' || item.icon.label === 'Telefone' || item.icon.label === 'Whatsapp'"
      v-model="item.value"
      :label="`Seu E-mail ou Telefone`"
    />
    <v-chip-group show-arrows v-model="item.icon">
      <v-chip
        :value="option"
        v-for="(option, i) in options"
        :key="i"
        color="info"
      >
        <v-icon left>
          {{ option.icon }}
        </v-icon>
        <span>
          {{ option.label }}
        </span>
      </v-chip>
    </v-chip-group>
    <div class="mt-4">
      <span class="text-h6">Previsualização</span>
      <div
        class="mt-2"
        v-if="item.icon.label !== 'E-mail' && item.icon.label !== 'Telefone' && item.icon.label !== 'Whatsapp'"
      >
        <a target="blank" :href="item.url">
          <v-icon class="mr-2">
            {{ item.icon.icon }}
          </v-icon>
          <span>{{ item.icon.label }}</span>
        </a>
      </div>
      <div
        class="mt-2"
        v-if="item.icon.label === 'E-mail' || item.icon.label === 'Telefone' || item.icon.label === 'Whatsapp'"
      >
        <v-icon class="mr-2">
          {{ item.icon.icon }}
        </v-icon>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    options: [
      {
        label: "Twitter",
        icon: "mdi-twitter",
      },
      {
        label: "Facebook",
        icon: "mdi-facebook",
      },
      {
        label: "Linked In",
        icon: "mdi-linkedin",
      },
      {
        label: "Whatsapp",
        icon: "mdi-whatsapp",
      },
      {
        label: "Instagram",
        icon: "mdi-instagram",
      },
      {
        label: "E-mail",
        icon: "mdi-email",
      },
      {
        label: "Telefone",
        icon: "mdi-phone",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      item: "contatos/getItem",
    }),
  },
};
</script>