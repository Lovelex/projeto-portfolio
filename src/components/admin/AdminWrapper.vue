<template>
  <div >
    <v-container>
      <v-card elevation="4" class="pa-4">
        <div class="d-flex align-baseline">
          <v-icon class="mr-2">
            {{title.icon}}
          </v-icon>
          <span class="grey--text text--darken-2 font-weight-medium text-h5">
            {{title.label}}
          </span>
        </div>
        <slot />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import adminRoutes from '@/router/admin'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    title: {
      icon: '',
      label: ''
    }
  }),
  methods: {
    setTitle(name) {
      if(this.name) {
        this.title = adminRoutes.children.find(title => title.name === name)
      }
    }
  },
  created() {
    this.setTitle(this.name)
  }

}
</script>

<style>

</style>