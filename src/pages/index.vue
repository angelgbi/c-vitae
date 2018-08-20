<template>
  <div>
    <h1>Hello world!</h1>
    <img src='@@/static/alias_nuxt.png' alt="hello">
    <p> {{ things }}</p>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      things: process.env.NODE_ENV
    }
  }
}
</script>

<style scoped>
</style>

