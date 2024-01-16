<template>
  <div>
    <h1>Welcome!!!</h1>
    <b-card tag="article" style="width: 350px" class="mb-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-card>
    <b-breadcrumb :items="items"></b-breadcrumb>
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

<style>
</style>