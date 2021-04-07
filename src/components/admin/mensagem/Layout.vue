<template>
  <div >
    <v-chip @click="toogleIsNew" v-if="item.isNew" color="success" outlined small class="mb-2">
      <v-icon left small>
        mdi-chat-alert
      </v-icon>
      <span>Nova!</span>
    </v-chip>
    <div class="d-flex">
      <div class="mb-2 mr-4">
        <v-icon class="mr-1" x-small> mdi-clock </v-icon>
        <span class="caption">
          {{ item.createdAt | moment }}
        </span>
      </div>
    </div>
    <div>
      <div>
        <v-icon class="mr-2">mdi-account</v-icon>
        <span>{{ item.name }}</span>
      </div>
      <div>
        <v-icon class="mr-2">mdi-email</v-icon>
        <span>{{ item.email }}</span>
      </div>
      <v-card class="pa-2 mt-2">
        <div>
          <v-icon class="mr-2">mdi-message</v-icon>
          <label class="grey--text text--darken-2 caption font-weight-bold">{{ item.message }}</label>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    toogleIsNew() {
      this.$store.dispatch("useUpdate/update", { collection: "mensagens", id: this.item.id, item: { isNew: false } })
    }
  }
};
</script>

<style>
</style>