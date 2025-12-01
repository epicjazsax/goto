<script setup lang="ts">
import './goto-database.json'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <h1>
    Results:
  </h1>
  <div class='results' id='results'>
    This is where the results will go
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

