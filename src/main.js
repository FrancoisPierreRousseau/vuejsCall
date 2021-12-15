import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Api from './api/api'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.prototype.$grafe = {
    api: new Api(),
}

const config = {
    $grafe: {
        api: new Api(),
    },
    $router: router,
}

new Vue({
    mixins: [config],
    store,
    router,
    render: h => h(App)
}).$mount('#app')

