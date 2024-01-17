<template>
  <div>
    <h1>Electronicos!!!</h1>
     
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
          href: "/#/juguetes",
          name: "",
        },
        {
          text: "Videojuegos",
          href: "/#/juguetes"
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