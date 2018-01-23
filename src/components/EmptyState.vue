<template>
  <div class="empty-state">
    <p>There are no results.</p>
    <p>Try searching for something else</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .empty-state {
    margin-top: 120px;
    text-align: center;
  }
</style>
