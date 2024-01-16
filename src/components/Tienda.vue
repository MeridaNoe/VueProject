<template>
  <div>
    <h1>Tienda de juguetes!!!</h1>
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
            text: 'Tienda de juguetes',
            href: '/#/inicio',
            name: 'jueguetes'
          },
          {
            text: 'Electronicos',
            href: '/#/juguetes',
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

<style>
</style>