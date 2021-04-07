<template>
  <div >
    <Section color="l2" title="Portfólios">
      <div>
        <v-tabs show-arrows background-color="l2" color="primary" centered>
          <v-tab
            v-for="(item, i) in items"
            :key="i"
          >{{item.title}}</v-tab>
          <v-tab-item
            v-for="(item, i) in items"
            :key="i"
            class="pa-2 l2 text-center"
          >
            <div class="d-flex justify-center">
              <div style="width: 800px">
                <v-card class="pa-4">
                  <div>
                    <span class="font-weight-bold text-h6">Imagens</span>
                    <div class="mt-4">
                      <v-row>
                        <v-col
                          v-for="(image, i) in item.images"
                          :key="i"
                          cols="6"
                          sm="4"
                        >
                          <div>
                            <v-dialog>
                              <template v-slot:activator="{ on }">
                                <v-img
                                  v-on="on"
                                  :src="image"
                                />
                              </template>
                              <v-img
                                aspect-ratio="1.777"
                                :src="image"
                              />
                            </v-dialog>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-card>
                <v-card class="mt-4 pa-4">
                  <div>
                    <span class="font-weight-bold text-h6">Descrição</span>
                    <p class="text-left mt-4">
                      {{ item.description }}
                    </p>
                  </div>
                </v-card>
              </div>
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
    </Section>
  </div>
</template>

<script>

  
import { mapGetters } from 'vuex';

const namespace = "portfolios"

export default {
  computed: {
    ...mapGetters({
      items: `${namespace}/getItems`,
    }),
  },
};
</script>

<style>
</style>