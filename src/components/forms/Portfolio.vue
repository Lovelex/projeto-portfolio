<template>
  <v-form>
    <v-text-field v-model="item.title" label="Título do portfólio" />
    <v-textarea v-model="item.description" label="Descrição do portfólio" />
    <v-file-input
      accept="image/x-png,image/jpeg"
      v-model="file"
      @change="upload"
      label="Foto sobre o portfólio"
    />
    <v-row>
      <v-col cols="6" sm="4" v-for="(url, i) in item.images" :key="i">
        <v-card width="200">
          <v-img width="200" :src="url">
            <div @click="del(url, i)" class="d-flex justify-end pa-1">
              <v-btn color="error" fab x-small>
                <v-icon> mdi-close </v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { v4 } from "uuid";

export default {
  data: () => ({
    file: null,
    path: `portfolios`,
    namespace: "portfolios",
    storageNamespace: "useStorage",
  }),
  computed: {
    url() {
      return this.$store.getters[`${this.storageNamespace}/getUrl`];
    },
    storageError() {
      return this.$store.getters[`${this.storageNamespace}/getStorageError`];
    },
    storageProgress() {
      return this.$store.getters[`${this.storageNamespace}/getStorageProgress`];
    },
    storageDelError() {
      return this.$store.getters[`${this.storageNamespace}/getStorageDelError`];
    },
    storageDelProgress() {
      return this.$store.getters[`${this.storageNamespace}/getStorageDelProgress`];
    },
    item() {
      return this.$store.getters[`${this.namespace}/getItem`];
    },
    mode() {
      return this.$store.getters[`${this.namespace}/getMode`];
    },
  },
  methods: {
    async upload() {
      if (this.file) {
        if (this.isImage()) {
          await this.$store.dispatch(`${this.storageNamespace}/upload`, {
            file: this.file,
            path: `${this.path}/${v4()}`,
          });
          this.item.images.push(this.url);
          this.file = null
        }
      }
    },
    async update() {
      if (!this.storageError) {
        this.$store.dispatch(`useUpdate/update`, {
          collection: this.namespace,
          id: this.item.id,
          item: {
            images: this.item.images,
          },
        });
      }
    },
    async del(url, i) {
      await this.$store.dispatch(`${this.storageNamespace}/del`, url)
      if(!this.storageDelError) {
        this.item.images.splice(i, 1)
        this.mode === 'update' && this.update()
      }
    },
    isImage() {
      if (this.file) {
        const acceptedTypes = ["image/png", "image/jpeg"];
        return acceptedTypes.includes(this.file.type);
      }
    },
  },
};
</script>