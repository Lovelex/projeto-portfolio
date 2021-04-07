<template>
  <div>
    <FormDialog :collection="collection" :namespace="namespace" v-if="formMode === 'form'" >
      <slot />
    </FormDialog>
    <DeleteDialog :collection="collection" :namespace="namespace" v-if="formMode === 'delete'" />
  </div>
</template>

<script>
import DeleteDialog from './DeleteDialog.vue'
import FormDialog from './FormDialog.vue'
export default {
  props: {
    formMode: {
      type: String,
      default: "form"
    },
    namespace: {
      type: String,
      required: true
    },
    collection: {
      type: String,
      required: true
    }
  },
  components: { DeleteDialog, FormDialog },

}
</script>

<style>

</style>