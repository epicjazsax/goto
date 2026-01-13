<script setup>
import { ref } from 'vue'

const searchBox = ref('')

</script>

<template>
  <div class='searchBox'>
    <h3>
      <p>Current search is: {{ searchBox }}</p>
      <input
        v-model='searchBox'
        className='b--green bg-lightest-blue'
        type='search'
        placeholder='enter search term here'
        @input='console.log("input has changed")'
      />
    </h3>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .search-bar h1,
  .search-bar h3 {
    text-align: left;
  }
}
</style>
