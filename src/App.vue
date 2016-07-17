<template>
  <div id="app" class="app">
    <drawer></drawer>
    <div id="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import drawer from './components/drawer';

export default {
  computed: {

  },

  methods: {

  },
  components: {
    drawer
  }

}
</script>


<style>
  * {
    box-sizing: border-box;
    transition: .25s ease-in-out;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }
  #drawer-toggle {
    position: absolute;
    opacity: 0;
  }
  #drawer-toggle-label {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    right: 0;
    height: 1.4rem;
    width: 2.4rem;
    display: block;
    position: fixed;
    background: rgba(255,255,255,.0);
    z-index: 1;
  }
  #drawer-toggle-label:before {
    content: '';
    display: block;
    position: absolute;
    background: #8d8d8d;
    height: .08rem;
    width: .9rem;
    right: .4rem;
    top: .3rem;
    box-shadow: 0 6px 0 #8d8d8d, 0 12px 0 #8d8d8d, 0 18px 0 #8d8d8d;
  }
  header {
    width: 100%;
    position: fixed;
    right: 0px;
    background: #efefef;
    padding: .16rem;
    font-size: .4rem;
    line-height: 30px;
    z-index: 0;
  }
  #drawer {
    position: fixed;
    z-index: 1;
    top: 0;
    right: -4rem;
    height: 100%;
    width: 4rem;
    background: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 20px;
    -webkit-overflow-scrolling: touch;
  }
  #page-content {
    margin-right: 0px;
    /*margin-top: 50px;*/
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 56px;
  }
  #drawer-toggle:checked ~ #drawer-toggle-label {
    height: 100%;
    width: calc(100% - 4rem);
    background: rgba(255,255,255, .8);
  }
  #drawer-toggle:checked ~ #drawer-toggle-label,
  #drawer-toggle:checked ~ header {
    right: 4rem;
  }
  #drawer-toggle:checked ~ #drawer {
    right: 0px;
  }
  #drawer-toggle:checked ~ #page-content {
    margin-right: 4rem;
  }
  .container{
    position: absolute;
    /*top: 2px;*/
  }
  .app{
    background: red;
    position: relative;
    /*margin-top: 50px;*/
  }
</style>
