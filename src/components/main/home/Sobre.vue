<template>
  <div >
    <Section title="Sobre Mim" color="l2" class="pt-12">
      <div class="d-flex justify-center">
        <div class="text-center ">          
          <p style="max-width: 640px">
           {{ item.text }}
          </p>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      item: 'sobre/getItem'
    })
  }
};
</script>

<style>
</style>