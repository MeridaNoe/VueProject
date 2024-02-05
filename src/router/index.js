import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "/",
    component: () => import("../components/LandPage.vue"),
  },
  
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('../components/Pagination.vue')
  },
  {
    path: "/formulario",
    name: "formulario",
    component: () => import("../components/Formulario.vue"),
  },
  //las rutas asociadas a los componentes
  {
    path: "*",
    component: () => import("../views/ErrorPages/Error404.vue"),
  },
  // RUTAS DE LA TIENDA DE JUGUETES
  {
    path: "/inicio",
    component: () => import("../components/Inicio.vue"),
    children: [
      {
        path: "/juguete",
        name: "juguete",
        component: () => import("../components/juguetes/Tienda.vue"),
      },
      {
        path: "/elec",
        name: "elec",
        component: () => import("../components/juguetes/Electronicos.vue"),
      },
      {
        path: "/vid",
        name: "vid",
        component: () => import("../components/juguetes/Juguetes.vue"),
      },
      {
        path: "/electro",
        name: "electro",
        component: () =>
          import("../components/electrodomesticos/TiendaElectro.vue"),
      },
      {
        path: "/cocina",
        name: "cocina",
        component: () => import("../components/electrodomesticos/Cocina.vue"),
      },
      {
        path: "/prod",
        name: "prod",
        component: () => import("../components/productos/TiendaProd.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
