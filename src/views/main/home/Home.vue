<template>
  <div v-if="configuracoes && configuracoes.visibilidade">
    <Hero v-if="configuracoes.visibilidade.sobre" />
    <Sobre v-if="configuracoes.visibilidade.sobre" id="sobre" />
    <Experiencia
      v-if="configuracoes.visibilidade.experiencia"
      id="experiência"
    />
    <Formacao v-if="configuracoes.visibilidade.formacao" id="formação" />
    <Qualificacao
      v-if="configuracoes.visibilidade.qualificacoes"
      id="qualificações"
    />
    <Portfolio v-if="configuracoes.visibilidade.portfolio" id="portfólios" />
    <Contato v-if="configuracoes.visibilidade.contato" id="contato" />
  </div>
</template>

<script>
import Hero from "@/components/main/home/Hero";
import Sobre from "@/components/main/home/Sobre";
import Formacao from "@/components/main/home/Formacao";
import Experiencia from "@/components/main/home/Experiencia";
import Qualificacao from "@/components/main/home/Qualificacao";
import Portfolio from "@/components/main/home/Portfolio";
import Contato from "@/components/main/home/Contato";
import { mapActions } from "vuex";

export default {
  components: {
    Hero,
    Sobre,
    Formacao,
    Experiencia,
    Qualificacao,
    Portfolio,
    Contato,
  },
  computed: {
    configuracoes() {
      return this.$store.getters["configuracoes/getItem"];
    },
  },
  methods: {
    ...mapActions({
      bindSobre: "sobre/bindItem",
      bindFormacoes: "formacoes/bindItems",
      bindExperiencias: "experiencias/bindItems",
      bindQualificacoes: "qualificacoes/bindItems",
      bindPortfolios: "portfolios/bindItems",
      bindContatos: "contatos/bindItems",
      bindAvatar: "avatar/bindItem",
      bindConfiguracoes: "configuracoes/bindItem",
    }),
  },
  created() {
    this.bindSobre();
    this.bindFormacoes();
    this.bindExperiencias();
    this.bindQualificacoes();
    this.bindPortfolios();
    this.bindContatos();
    this.bindAvatar();
    this.bindConfiguracoes();
    this.$vuetify.theme.dark = false
  },
  watch: {
    configuracoes: {
      deep:true,
      handler(){
        this.$vuetify.theme.themes.light.primary = this.configuracoes.cor.hex
        this.$vuetify.theme.themes.dark.primary = this.configuracoes.cor.hex
        this.$vuetify.theme.dark = this.configuracoes.isDark
      }
    }
  },
};
</script>

<style>
</style>