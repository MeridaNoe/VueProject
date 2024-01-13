<script setup>
</script>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
          <div style="padding-left: 1525px;">
            <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
          </div>

        </b-collapse>
      </b-navbar>
    </div>
    <div class="col-md-10">
      <!-- Botones y contenido principal aquí -->
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
      <!-- Añade más contenido según tus necesidades -->
    </div>

    <template>
      <div>

        <b-sidebar id="sidebar-1" title="Sidebar" shadow no-header-close>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
      </div>
    </template>

  </div>
</template>

<style scoped></style>
