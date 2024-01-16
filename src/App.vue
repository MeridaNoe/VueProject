<script setup>
</script>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/#/inicio">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/#/page2">Page 2</b-nav-item>
            <b-nav-item href="/#/page3">Page 3</b-nav-item>
          </b-navbar-nav>
          <div style="padding-left: 1525px">
            <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
          </div>
        </b-collapse>
      </b-navbar>
    </div>
    <div>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>
    </div>
   
    <router-view> </router-view>
  </div>
</template>


<script>
export default { data() {
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
  },};
</script>
<style scoped></style>
