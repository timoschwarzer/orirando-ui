<template>
  <div class="hint-message-container">
    <transition name="hint-message" mode="out-in">
      <div v-if="!!text" :key="text" class="hint-message">
        <h2>{{ text }}</h2>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'hint-message',
    props: {
      text: String
    }
  }
</script>

<style lang="scss">
  .hint-message {
    &-enter-active, &-leave-active {
      transition: opacity 100ms, transform 400ms cubic-bezier(.19, 1.46, .52, 1);
    }

    &-enter {
      opacity: 0;
      transform: scale(1.6);
    }

    &-leave-to {
      opacity: 0;
    }
  }
</style>

<style lang="scss" scoped>
  .hint-message-container {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .hint-message {
      display: inline-block;
      background: url('../assets/hintMessageBackground.png') center;
      background-size: 100% 100%;
      padding: 12px 76px;
      font-size: 22px;
      margin-top: 40px;
      max-width: 300px;
    }
  }
</style>