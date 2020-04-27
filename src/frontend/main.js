import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import { rtdbPlugin } from 'vuefire'
import { ServerTable, ClientTable, Event } from 'vue-tables-2';
import VModal from 'vue-js-modal'

//jquery
window.$ = window.jQuery = require('jquery');
//moment.js
window.moment = require('moment');
//daterangepicker
window.daterangepicker = require('daterangepicker');

Vue.use(VModal, { dialog: true });
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');

Vue.use(rtdbPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#vue-frontend-app',
    router,
    render: h => h(App)
})