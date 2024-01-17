import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    // ruta base

    {
        path: '/',
        redirect: '/inicio'
    },
     // RUTAS DE LA TIENDA DE JUGUETES
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
                path: '/juguete',
                name: 'juguete',
                component: () => import('../components/juguetes/Tienda.vue')
            }
        ]
    },
    // RUTAS DE LA TIENDA DE ELECTRODOMESTICOS
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
                path: '/electro',
                name: 'electro',
                component: () => import('../components/electrodomesticos/TiendaElectro.vue')
            }
        ]
    },
    //RUTA DE LA TIENDA DE PRODUCTOS
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/prod',
                name: 'prod',
                component: () => import('../components/productos/TiendaProd.vue')
            }
        ]
    },
]

const router = new VueRouter({ routes, })
export default router;
