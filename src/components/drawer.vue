<template>
  <div id="app" class="container">
    <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
    <label for="drawer-toggle" id="drawer-toggle-label"></label>
    <headerr></headerr>
    <section id="drawer">
      <user-info></user-info>
      <menu></menu>
      <div>{{pageTopic}}</div>
    </section>
  </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
  import UserInfo from './user-info';
  import Menu from './menu';
  import headerr from './header';
  import { getPageType } from '../vuex/getters';
  import store from '../vuex/store';
  export default{
  store: store,
    vuex: {
    getters: {
      pageTopic: getPageType
    }
  },
        components: {
            UserInfo,
            Menu,
          headerr
        }
    }
</script>
