<template>
  <b-navbar toggleable="md" type="light">

  <b-navbar-toggle target="nav_collapse" class='ml-auto'></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class='mr-auto nav-item nav'>
      <b-nav-item>
        <router-link to='/'>Top</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to='/about'>About</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to='/work'>Works</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to='/contact'>Contact</router-link>
      </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<style lang='scss' scoped>

  .nav-item {
    font-size: 20px;
    padding-left: 20px;
    text-align: right;
  }

  a {
    color: rgba(0, 0, 0, 0.5);
      &:hover {
        color: rgba(0, 0, 0, 0.8);
        text-decoration: none;
      }
  }
</style>