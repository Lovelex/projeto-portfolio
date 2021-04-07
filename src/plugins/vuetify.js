import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        l1: '#D3D7EC',
        l2: '#E6E8F4'
      },
      dark: {
        l1: '#101012',
        l2: '#0A0A0A'
      }
    }
  }
});
