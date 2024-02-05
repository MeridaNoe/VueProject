<template>
  <div>
    <b-row>
      <b-col>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="/#/inicio">Inicio</b-navbar-brand>
          <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

          <b-collapse id="navbar-nav" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="/#/formulario">Formulario</b-nav-item>
              <b-nav-item href="/#/pagination">Paginacion</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>

    <b-row>
      <div class="grid-container">
        <div class="sidebar fixed-sidebar">
          <b-card title="Sidebar" style="height: 100vh;" class="mb-2">
            <b-card-text>
              <b-nav vertical class="pt-5">

                <b-nav-item>
                  <b-link :to="{ name: 'juguete' }" active-class="link-seleccionado">Tienda de juguetes</b-link>
                </b-nav-item>

                <b-nav-item>
                  <b-link :to="{ name: 'electro' }" active-class="link-seleccionado">Tienda de
                    electrodomesticos</b-link>
                </b-nav-item>

                <b-nav-item>
                  <b-link :to="{ name: 'prod' }" active-class="link-seleccionado">Tienda de productos para el
                    hogar</b-link>
                </b-nav-item>
              </b-nav>
            </b-card-text>
          </b-card>
        </div>
        <b-col>
          <router-view />
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto;
  grid-template-areas: "sidebar content";
  gap: 1rem;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.link-seleccionado {
  color: #898989;
}
</style>