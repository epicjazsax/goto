<script setup lang="ts">
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class='results'>
    This is where the results will go
  </div>
</template>

<style scoped>
.results {
  font-size: 1.5rem;
}
</style>

