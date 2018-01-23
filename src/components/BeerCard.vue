<template>
  <div class="flex-center card">
    <div>
      <div class="flex-center">
        <img class="card-image" :src="beer.image_url">
      </div>
      <div class="beer-details">
        <div class="beer-name">{{ beer.name }}</div>
        <div class="beer-description">{{ beer.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'beer-card',

  props: {
    beer: Object
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
    height: 600px;
    min-width: 250px;
  }

  .card-image {
    width: 100px;
    height: 300px;
    margin-top: 24px;
  }

  .beer-name {
    font-size: 18px;
    font-weight: 500;
  }

  .beer-description {
    font-size: 14px;
    overflow: scroll;
    height: 170px;
  }

  .beer-details {
    margin-top: 24px;
    text-align: center;
    padding: 12px;
  }
</style>
