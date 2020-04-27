import Vue from 'vue'
import Router from 'vue-router'
import Home from 'frontend/pages/Home.vue'
import GameDetail from 'frontend/pages/GameDetail.vue'

Vue.use(Router)

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                selector: to.hash
            }
        }

        return false;
    },
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            props: true,
        },
        {
            path: '/game-detail',
            name: 'GameDetail',
            component: GameDetail,
            props: true,
        },
    ]
})