<template>
  <div class='works'>
    <div class='row'>
      <div class='col-md-6 offset-md-1'>
        <h3 class='works-title'>作ったもの</h3>
      </div>
    </div>
    <product v-for='work in works' v-bind:work='work' v-bind:key='work["id"]' class='product-box'></product>
  </div>
</template>

<script>
  import works from '../../static/data.json'
  import product from '@/components/Product.vue'

  export default {
    data() {
      return {
        works: works
      }
    },
    components: {
      product
    }
  }
</script>

<style lang='scss' scoped>
  h3 {
    font-family: 'Noto Sans JP', sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .works {
    padding: 50px 0;
  }

  .product-box {
    padding: 40px 0;
  }
</style>