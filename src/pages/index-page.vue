<template>
  <div class="home">
    <h1 class="center">Seed Generator 3.0.c</h1>

    <seed-generator />
  </div>
</template>

<script>
  import SeedGenerator from '../components/seed-generator'
  export default {
    name: 'index-page',
    components: {
      SeedGenerator
    }
  }
</script>