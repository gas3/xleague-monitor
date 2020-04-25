import Vue from 'vue'
import Router from 'vue-router'
import Home from 'frontend/pages/Home.vue'
import GameDetail from 'frontend/pages/GameDetail.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/game-detail',
            name: 'GameDetail',
            component: GameDetail
        },
    ]
})