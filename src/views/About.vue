<template>
  <div class='about'>
    <div class='row'>
      <div class='col-md-4 order-md-2 user-icon'>
        <img src='http://vr-blogs.com/wp-content/uploads/2018/10/akashi2.jpg'>
      </div>
      <div class='col-md-4 offset-md-2 order-md-1'>
        <div class='career'>
          <h3>経歴</h3>
          <ul>
            <li>1989年生まれ（29歳） 東京在住</li>
            <li>獣医学部卒業 → 獣医師免許取得</li>
            <li>公務員獣医師（半年）</li>
            <li>Webライター（半年）</li>
            <li>Webサイト、コンテンツ制作（1年半）</li>
            <li>Webエンジニア（2018年11月~）</li>
          </ul>
        </div>
      </div>
    </div>

    <div class='row'>
      <div class='col-md-8 offset-md-2'>
        <div class='skill'>
          <h3>技術</h3>
          <ul>
            <li>Ruby・Rails</li>
            <li>PHP・Laravel</li>
            <li>HTML5・CSS3・Bootstrap4</li>
            <li>JavaScript・Vue.js</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'About'
}
</script>

<style lang='scss' scoped>

  h3 {
    font-family: 'Noto Sans JP', sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .about {
    padding: 50px 0;
  }

  .career {
    padding-bottom: 30px;
  }

  .career li, .skill li {
    list-style-type: circle;
    padding-top: 8px;
    color: rgba(0, 0, 0, 0.8);
  }

  .user-icon {
    text-align: center;

    img {
      width: 60%;
      padding-top: 30px;
    }
  }
</style>