<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style>
  .container {
    margin-top: 24px;
  }
</style>
