<template>
  <v-form>
    <v-card class="mx-auto" max-width="224">
      <v-img :src="item.image" />
    </v-card>
    <v-file-input
      :loading="storageProgress"
      @change="upload"
      accept="image/x-png,image/jpeg"
      v-model="file"
      label="Minha Foto"
    />
    <div class="d-flex justify-end mt-4">
      <v-btn
        :loading="storageProgress"
        @click="upload"
        :disabled="!file"
        color="info"
      >
        Atualizar imagem
      </v-btn>
    </div>
  </v-form>
</template>

<script>
const storageNamespace = "useStorage";
const sobreNamespace = "avatar";

export default {
  data: () => ({
    file: null,
    path: "contato/profile",
  }),
  computed: {
    url() {
      return this.$store.getters[`${storageNamespace}/getUrl`];
    },
    storageError() {
      return this.$store.getters[`${storageNamespace}/getStorageError`];
    },
    storageProgress() {
      return this.$store.getters[`${storageNamespace}/getStorageProgress`];
    },
    item() {
      return this.$store.getters[`${sobreNamespace}/getItem`];
    },
  },
  methods: {
    async upload() {
      if (this.file) {
        if (this.isImage()) {
          console.log(this.file);
          await this.$store.dispatch(`${storageNamespace}/upload`, {
            file: this.file,
            path: this.path,
          });
          if (this.url && !this.storageError) {
            await this.update();
            this.file = null;
          }
        }
      }
    },
    async update() {
      if (this.url && !this.storageError) {
        this.$store.dispatch(`useUpdate/update`, {
          collection: "avatar",
          id: "items",
          item: {
            image: this.url,
          },
        });
      }
    },
    isImage() {
      if (this.file) {
        const acceptedTypes = ["image/png", "image/jpeg"];
        return acceptedTypes.includes(this.file.type);
      }
    },
  },
  created() {
    this.$store.dispatch(`${sobreNamespace}/bindItem`)
  }
};
</script>

<style>
</style>