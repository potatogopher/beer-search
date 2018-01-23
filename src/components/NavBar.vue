<template>
  <nav class="nav flex-between wrap" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/home">
        BrewDog Beer Search
      </router-link>
    </div>

    <div class="navbar-item">
      <search></search>
    </div>

    <div class="control navbar-item">
      <a class="bd-tw-button button" data-social-network="Github" data-social-action="github" data-social-target="http://localhost:4000" target="_blank" href="https://github.com/potatogopher">
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>
          Github
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'NavBar',

  components: {
    'search': Search
  },

  data () {
    return {
      search: '',
      dropdown: false
    }
  },

  methods: {
    searchForBeer () {
      console.log('Found the good stuff')
    }
  }
}
</script>

<style scoped>
  .nav {
    border-bottom: 1px solid rgba(0, 0, 0, .12);
  }

  .search {
    width: 400px;
    height: 30px;
    border-radius: 2px;
    font-size: 14px;
    outline: none;
    box-shadow: none;
    border: 1px solid #eee;
  }
</style>
