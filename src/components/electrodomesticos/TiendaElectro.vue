<template>
  <div>
    <h1>
        Tienda de Electrodomesticos!!!
    </h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Para la Cocina",
          href: "/#/cocina",
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