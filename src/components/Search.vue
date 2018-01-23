<template>
  <div>
    <input
      v-model="search"
      class="search"
      placeholder="Search"
      type="text"
      name="search"
      @keyup.enter="searchForBeer"
    >
    <div
      @click="dropdown = !dropdown"
      :class="`dropdown ${ dropdown ? 'is-active' : ''}`"
    >
      <div class="dropdown-trigger">
        <button class="dropdown-btn button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Search By: {{ searchBy }}</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div @click="searchBy = 'Beer'" class="dropdown-item">Beer name</div>
          <div @click="searchBy = 'Pairing'" class="dropdown-item">Beer pairing</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      search: '',
      searchBy: 'Beer',
      dropdown: false
    }
  },

  methods: {
    searchForBeer () {
      let queryValue = this.search.replace(' ', '_').toLowerCase()

      switch (this.searchBy) {
        case 'Beer':
          this.$store.dispatch('beer/all', `?beer_name=${queryValue}`)
          break
        case 'Pairing':
          this.$store.dispatch('beer/all', `?food=${queryValue}`)
          break
        default:
          this.$store.dispatch('beer/all', '')
          break
      }
    }
  }
}
</script>

<style scoped>
  .search {
    width: 400px;
    height: 30px;
    border-radius: 2px 0 0 2px;
    font-size: 14px;
    outline: none;
    box-shadow: none;
    border: 1px solid #eee;
  }

  .dropdown {
    width: 125px;
    height: 30px;
  }

  .dropdown-btn {
    border: 1px solid #eee;
    position: absolute;
    height: 30px;
    font-size: 12px;
    border-radius: 0 2px 2px 0;
  }

  .dropdown-content {
    cursor: pointer;
  }

  .dropdown-item:hover {
    background-color: #eee;
  }
</style>
