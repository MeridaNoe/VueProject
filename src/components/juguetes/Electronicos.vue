<template>
  <div>
    <h1>Electronicos!!!</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        
        {
          text: "Electronicos",
          href: "/#/elec",
          name: "",
        },
        {
          text: "Videojuegos",
          href: "/#/vid"
        },
        {
          text:""
        }
      ],
    };
  },
};
</script>

<style>
</style>