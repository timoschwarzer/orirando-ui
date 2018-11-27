<template>
  <div class="app">
    <hint-message :text="hint" />
    <div class="logo-container">
      <img class="logo" alt="Ori Randomizer" src="./assets/logo.png">
    </div>

    <div class="page-container">
      <div class="page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import HintMessage from './components/hint-message'

  export default {
    components: {
      HintMessage
    },
    data: () => ({
      hint: null
    })
  }
</script>

<style lang="scss" scoped>
  .app {
    min-height: 100vh;
    background: url('./assets/background.jpg') center fixed;
    background-size: cover;

    .logo-container {
      text-align: center;

      .logo {
        width: 300px;
        max-width: 100%;
      }
    }

    .page-container {
      padding: 8px;

      .page {
        background: transparentize(black, 0.25);
        border-radius: 8px;
        max-width: 1140px;
        margin: 0 auto;
        padding: 16px;
      }
    }
  }
</style>