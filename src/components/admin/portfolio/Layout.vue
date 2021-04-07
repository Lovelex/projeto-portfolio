<template>
  <div>
    <div class="d-flex">
      <div class="mb-2 mr-4">
        <v-icon class="mr-1" x-small> mdi-clock </v-icon>
        <span class="caption">
          {{ item.createdAt | moment }}
        </span>
      </div>
      <div class="mb-2">
        <v-icon class="mr-1" x-small> mdi-pencil </v-icon>
        <span class="caption">
          {{ item.updatedAt | moment }}
        </span>
      </div>
    </div>
    <div>
      <div>
        <span class="mr-2">Título:</span>
        <span>{{ item.title }}</span>
      </div>
      <div>
        <span class="mr-2">Descrição:</span>
        <v-card class="pa-2" elevation="1">
          <span class="grey--text text--darken-2 d-block">{{
            item.description
          }}</span>
        </v-card>
      </div>
      <div>
        <v-row>
          <v-col v-for="(image, i) in item.images" :key="i">
            <v-dialog>
              <template v-slot:activator="{on}">
                <v-card v-on="on" width="224">
                  <v-img contain aspect-ratio="1.777" :src="image" />
                </v-card>
              </template>
              <v-card>
                <v-img contain aspect-ratio="1.777" :src="image" />
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
</style>