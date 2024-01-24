<template>
  <div>
    <h1>Tienda de juguetes!!!</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Electronicos',
          href: '/#/elec',
          name: '',
        },
        {
          text: '',
          href: '',
          name: '',
        }
      ]
    }
  }
};
</script>

<style></style>