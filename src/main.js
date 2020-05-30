import Vue from 'vue'
import App from './App.vue'
import router from './router'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';


import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(datePicker);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
