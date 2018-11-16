<template>
  <div class='row'>
    <div class='col-md-5 offset-md-1'>
      <div class='product-image'>
        <a v-bind:href='work["url"]' target='_blank'>
          <img :src="work['img']">
        </a>
      </div>
    </div>
    <div class='col-md-4 offset-md-1'>
      <div class='product-info'>
        <p class='product-title'>{{ work['title'] }}</p>
        <p>{{ work['text'] }}</p>
        <p>
          <i class="fab fa-github fa-lg sns-icon"></i>
          <a v-bind:href='work["github"]' target='_blank'>githubページ</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    title: 'product_details',
    props: ['work']
  }
</script>

<style lang='scss' scoped>
  .product-image {
    margin-bottom: 15px;

    img {
      width: 100%;
    }
  }

  .product-info {
    padding-top: 15px;
    color: rgba(0, 0, 0, 0.8);

    .product-title {
      font-size: 20px;
    }

    a {
      color: rgba(0, 0, 0, 0.5);
      &:hover {
      text-decoration: underline;
      }
    }
  }
</style>