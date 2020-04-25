import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import { rtdbPlugin } from 'vuefire'
import { ServerTable, ClientTable, Event } from 'vue-tables-2';

// Vue.use(ClientTable);
Vue.use(ClientTable);

Vue.use(rtdbPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#vue-frontend-app',
    router,
    render: h => h(App)
})