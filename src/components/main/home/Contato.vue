<template>
  <div >
    <Section color="l1">
      <v-row>
        <v-col class="d-flex flex-column" cols="12" md="6">
          <div>
            <Left />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <Right />
          </div>
        </v-col>
      </v-row>
    </Section>
  </div>
</template>

<script>
import Left from "../contato/Left";
import Right from "../contato/Right";

export default {
  components: { Left, Right },
};
</script>

<style >
</style>