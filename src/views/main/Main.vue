<template>
  <div>
    <Snack />
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <UpButton />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/layout/main/nav/Nav";
import UpButton from "@/layout/main/UpButton";
import Footer from "@/layout/main/footer/Footer.vue";

export default {
  components: { Nav, Footer, UpButton },
};
</script>

<style>
</style>