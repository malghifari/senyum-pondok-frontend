import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './routes'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
