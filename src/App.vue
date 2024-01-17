<script setup></script>
<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-navbar">
      <b-navbar-brand class="inicio" href="/#/inicio">INICIO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>

    <div class="grid-container">
      <div class="sidebar fixed-sidebar">
        <b-card title="Sidebar" style="height: 100vh;" class="mb-2">
          <b-card-text>
            <b-nav vertical class="pt-5">

              <b-nav-item>
                <b-link :to="{ name: 'juguete' }" active-class="link-seleccionado">Tienda de juguetes</b-link>
              </b-nav-item>

              <b-nav-item>
                <b-link :to="{ name: 'electro' }" active-class="link-seleccionado">Tienda de electrodomesticos</b-link>
              </b-nav-item>

              <b-nav-item>
                <b-link :to="{ name: 'prod' }" active-class="link-seleccionado">Tienda de productos para el
                  hogar</b-link>
              </b-nav-item>
            </b-nav>
          </b-card-text>
        </b-card>
      </div>

      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de juguetes",
          href: "/#/tienda",
          name: "Electronicos",
        },
        {
          text: "",
          href: "",
          name: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
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

.inicio {
  padding-left: 30px;
}

</style>
