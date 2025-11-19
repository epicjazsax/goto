<template>
  <div class="greetings">
    <h1 class="green">GO-TO</h1>
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
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
