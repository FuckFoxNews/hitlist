import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        'primary': '#FFFFFF',
        'accent-yellow': '#F6B912',
        'accent-red': '#DD4063',
        'accent-green': '#58CA8E',
        'accent-aqua': '#15A7F9',
        'accent-blue': '#3A6BCF',
        'gradient-1': '#069273',
        'gradient-2': '#94C83F',
      }
    }
  }
});
