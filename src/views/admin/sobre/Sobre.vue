<template>
  <div>
    <AdminWrapper name="Sobre">
      <v-row align="end">
        <v-col cols="12" sm="6">
          <div>
            <Left />
          </div>
        </v-col>
        <v-col>
          <div>
            <Right />
          </div>
        </v-col>
      </v-row>
    </AdminWrapper>
  </div>
</template>

<script>
import Left from "@/components/admin/sobre/Left";
import Right from "@/components/admin/sobre/Right";
import { mapActions } from 'vuex';

export default {
  components: {
    Left,
    Right,
  },
  methods: {
    ...mapActions({
      bindData: `sobre/bindItem`
    })
  },
  created() {
    this.bindData()
  }
};
</script>

<style>
</style>