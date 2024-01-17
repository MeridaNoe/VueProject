<template>
  <div>
    <h1>Tienda de juguetes!!!</h1>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Tienda de juguetes',
          href: '/#/tienda',
          name: 'jueguetes'
        },
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