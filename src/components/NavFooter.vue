<template>
  <footer>
    <nav class='footer-nav'>
      <ul>
        <li>
          <router-link to='/'>Top</router-link>
        </li>
        <li>
          <router-link to='/about'>About</router-link>
        </li>
        <li>
          <router-link to='/work'>Works</router-link>
        </li>
        <li>
          <router-link to='/contact'>Contact</router-link>
        </li>
      </ul>
    </nav>

    <div class='sns-box'>
      <a href='https://twitter.com/akashi__akashi' target='_blank'>
        <i class="fab fa-twitter fa-2x sns-icon"></i>
      </a>
      <a href='https://github.com/kazuhiko-itani' target='_blank'>
        <i class="fab fa-github fa-2x sns-icon"></i>
      </a>
    </div>

    <div class='copyright'>
      <small>&copy;2018 Akashixi</small>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
  footer {
    text-align: center;

    .footer-nav {
      padding-right: 25px;
    }
  }

  a {
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .footer-nav ul li {
    list-style: none;
    padding-right: 15px;
    display: inline-block;
  }

  .sns-icon {
    width: 50px;
  }

  .copyright {
    padding: 10px 0;
    color: gray;
  }
</style>