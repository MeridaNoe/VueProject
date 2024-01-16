import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    // ruta base

    {
        path: '/',
        redirect: '/inicio'
    },

    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            }
        ]
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/juguetes',
                name: 'juguetes',
                component: () => import('../components/Juguetes.vue')
            }
        ]
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/tienda',
                name: 'tienda',
                component: () => import('../components/Tienda.vue')
            }
        ]
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/elec',
                name: 'elec',
                component: () => import('../components/Electronicos.vue')
            }
        ]
    },

]

const router = new VueRouter({ routes, })
export default router;
