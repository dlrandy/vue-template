<template>
  <div id="app" class="container">
    <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
    <label for="drawer-toggle" id="drawer-toggle-label"></label>
    <headerr pageType="pageType"></headerr>
    <section id="drawer">
      <user-info></user-info>
      <menu></menu>
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
  export default{
        props:['pageType'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {
            UserInfo,
            Menu,
          headerr
        }
    }
</script>
