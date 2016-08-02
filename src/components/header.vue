<template>
  <header  id="hd">
    <div class="nv-toolbar">
      <span class="back-nav" @click="historyBack">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </span>
      <span v-text="pageTopic"></span>
      <i class="num" v-if="messageCount > 0"> {{messageCount}}</i>
      <i v-if="needAdd" v-show="!messageCount || messageCount <= 0"
         class="iconfont add-icon" v-link="{name:'add'}">&#xe60f;</i>
    </div>
  </header>
</template>
<style lang="scss">

.nv-toolbar{
  text-align: center;
  .back-nav{
    float: left;
  }
}
</style>
<script>
  import { getPageType } from '../vuex/getters';
  import store from '../vuex/store';
  import "font-awesome/scss/font-awesome.scss";
    export default{

        data(){
            return{
                msg:'hello vue'
            }
        },
      store: store,
      vuex: {
        getters: {
          pageTopic: getPageType
        }
      },
        components:{

        },
      methods: {
        historyBack() {
          history.back();
          if (history.length < 0) {
            //返回客户端
          }
        }
      },
    }
</script>
