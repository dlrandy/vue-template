<template>
  <header  id="hd">
    <div class="nv-toolbar">
      <div class="back-nav" @click="historyBack">
        《期货圈
      </div>
      <span v-text="pageType">杨贵妃 </span>
      <i class="num" v-if="messageCount > 0"> {{messageCount}}</i>
      <i v-if="needAdd" v-show="!messageCount || messageCount <= 0"
         class="iconfont add-icon" v-link="{name:'add'}">&#xe60f;</i>
    </div>
  </header>
</template>
<style>

</style>
<script>

    export default{
      props:['pageType'],
        data(){
            return{
                msg:'hello vue'
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
