<template>
  <div>
    <h1>this is {{mes}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        mes: 'register'
      }
    }
  }
</script>

<style scoped>
  h1{
    color: green;
  }
</style>
