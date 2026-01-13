<script>
//const database = JSON.parse('./goto-database.json')
//const results = database.toString()
const results = 'HELLO WORLD';

export default {
  data() {
    return {
      entries: ['first', 'second']
    };
  },
  async mounted() {
    try {
      const response = await fetch('/goto-database.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      try {
        this.entries = await response.json()
      } catch (error) {
        console.error('Error parsing json response:', error)
      }
    } catch (error) {
      console.error("Could not fetch entries:", error);
    }
  }
}

</script>

<template>
  <h1>
    Results:
  </h1>
  <div class='results' id='results'>
    <ul>
      <li v-for="entry in entries">
        {{ entry }}
      </li>
    </ul>
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

