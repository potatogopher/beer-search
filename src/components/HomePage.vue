<template>
  <div class="">
    <rise-loader
      v-if="loading"
      class="rise-loader"
    ></rise-loader>
    <div class="flex wrap">
      <div
        class="beer"
        v-for="(beer, i) in beers"
        :key="i">
        <beer-card :beer="beer"></beer-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RiseLoader from 'vue-spinner/src/RiseLoader'

import EmptyState from '@/components/EmptyState'
import BeerCard from '@/components/BeerCard'

export default {
  name: 'home',

  beforeCreate () {
    this.$store.dispatch('beer/all')
  },

  components: {
    'empty-state': EmptyState,
    'beer-card': BeerCard,
    'rise-loader': RiseLoader
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      'beers': 'beer/beerList',
      'loading': 'beer/loading'
    })
  }
}
</script>

<style scoped>
  .rise-loader {
    margin-top: 20%;
  }

  .beer {
    width: 100%;
    flex: 1;
    margin: 10px;
  }
</style>
