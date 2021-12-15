import Vue from 'vue'
import VueRouter from 'vue-router'

import Hotline from '../views/Hotline/Index.vue'
import HotlineModels from '../views/Hotline/CollectionModel.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/hotline',
        name: 'Hotline',
        component: Hotline,
        children: [
            {
                path: '/tickets',
                name: 'tickets',
                component: HotlineModels,
                props: (route) => ({
                    filter: {
                        state: route.query.state,
                        intervenant: route.query.intervenant,
                        client: route.query.client,
                    }
                }),
                meta: {model: 'ticket'}
            },
            {
                path: '/clients',
                name: 'clients',
                component: HotlineModels,
                meta: {model: 'client'},

            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
