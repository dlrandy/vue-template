<template>
  <div id="app" class="container">
    <header class="header">
      <div class="logo">
        期货圈
      </div>
      <div class="history">
        
      </div>
      <div class="navbar">
        
      </div>
    </header>
    <router-view></router-view>
  </div>
  <div class="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
      <a href="/about">about</a>
      <a href="/dfdf">notfound</a>
    </p>
    <p>
      
    </p>
    
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  computed: {

  },
  methods: {
    historyBack() {
      history.back();
      if (history.length < 0) {
        //返回客户端
      }
    }
  },
  components: {
    Hello
  }
}
</script>

<style src="../assets"></style>
