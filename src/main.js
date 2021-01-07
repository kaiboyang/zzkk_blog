import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import './plugins/ant-design-vue.js'
import './components/bubble/JSClickBubble.user'
import axios from 'axios'

axios.defaults.baseURL = 'http://10.0.117.38:8080/Blog_war_exploded'
axios.defaults.timeout = 5000

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
