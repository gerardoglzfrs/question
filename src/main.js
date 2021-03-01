import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from "vue-axios"
import { apolloClient } from './graphql/apollo'
import VueApollo from 'vue-apollo'
import vuetify from './plugins/vuetify';

Vue.use(vueAxios,axios)
Vue.use(VueApollo)

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:3000/"

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem('token')}` 

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
