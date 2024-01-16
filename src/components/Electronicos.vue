<template>
  <div>
    <h1>Electronicos!!!</h1>
     <b-card tag="article" style="width: 350px" class="mb-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-card>
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
          text: "Electronicos",
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