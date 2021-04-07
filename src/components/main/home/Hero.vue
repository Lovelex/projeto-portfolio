<template>
  <div  id="sobre">
    <Section color="l1">
      <div :class="{'mb-n16' : !isMobile}" class="d-flex flex-column align-center ">
        <v-card :elevation="isMobile ? 0 : 2" :color="isMobile ? 'l1' : 'primary'" width="800">
          <div class="mt-12">
            <v-img class="mx-auto" max-width="320" :src="item.image"/>
          </div>
        </v-card>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'sobre/getItem'
    }),
    isMobile() {
      return this.$vuetify.breakpoint.xs
    }
  },
  
}
</script>

<style >

</style>