<template>
  <div id="app">
      <navheader></navheader>
      <div class='container'>
        <transition>
          <router-view />
        </transition>
      </div>
      <navfooter></navfooter>
  </div>
</template>

<script>
  import navheader from '@/components/NavHeader.vue'
  import navfooter from '@/components/NavFooter.vue'

  export default {
    name: 'app',
    components: {
      navheader,
      navfooter
    }
  }
</script>

<style lang='scss'>
  h3 {
    font-family: 'Noto Sans JP', sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .v-enter-active {
    transition: opacity 1.5s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>
