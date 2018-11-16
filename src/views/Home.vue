<template>
  <div class='row'>
    <div class='col-md-10 col-md-offset-1'>
      <div class='top-page'>
        <figure class='top-image'>
          <img src='http://vr-blogs.com/wp-content/uploads/2018/10/b14e03f7e810f58b2ffe6ae9c73410cd_m-1.jpg'>
          <figcaption class='top-title'>
            <h2>
              Akashixi's<br />
              PortFolio<br />
              Site
            </h2>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

  h3 {
    font-family: 'Noto Sans JP', sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .top-page {
    padding-top: 30px;
  }

  .top-image img {
    padding-top: 150px;
    padding-left: 10px;
    width: 70%;
  }

  .top-image {
    position: relative;
    width: 100%;
  }

  .top-title {
    position: absolute;
    top: 20px;
    right: 23px;
  }

  .top-page h2 {
    font-family: 'Courgette', cursive;
    font-size: 60px;
    letter-spacing: 1px;
    color: gray;
    text-align: right;
  }

  @media screen and (max-width: 668px) {
    .top-image {
      padding: 30px 40px 0 0;
    }
  }
</style>