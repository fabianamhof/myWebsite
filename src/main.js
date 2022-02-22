import Vue from 'vue'
import 'fullpage.js/dist/fullpage.min.css'
// Optional. When using scrollOverflow:true
import 'fullpage.js/vendors/scrolloverflow'

// Optional. When using fullpage extensions
//import './fullpage.scrollHorizontally.min'

import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.use(VueFullPage);

Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  el: '#app',
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

