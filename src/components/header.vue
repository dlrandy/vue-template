<template>
  <header  id="hd">
    <div class="nv-toolbar">
      <span class="back-nav" @click="historyBack">
        <<<
      </span>
      <span v-text="pageTopic"></span>
      <i class="num" v-if="messageCount > 0"> {{messageCount}}</i>
      <i v-if="needAdd" v-show="!messageCount || messageCount <= 0"
         class="iconfont add-icon" v-link="{name:'add'}">&#xe60f;</i>
    </div>
  </header>
</template>
<style>

</style>
<script>
  import { getPageType } from '../vuex/getters';
  import store from '../vuex/store';
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
