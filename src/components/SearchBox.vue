<template>
  <div class="search-bar">
    <h3>
      <input
        className='b--green bg-lightest-blue'
        type='search'
        placeholder='enter search term here'
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
