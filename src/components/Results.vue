<script setup lang="ts">
//const database = JSON.parse('./goto-database.json')
//const results = database.toString()
const results = 'HELLO WORLD'

</script>

<template>
  <h1>
    Results:
  </h1>
  <div class='results' id='results'>
    {{ results }}
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
}

.results {
  font-size: 1.5rem;
}
</style>

