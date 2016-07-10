<template>
    <div class="user-info">
        <ul class="login-no" v-if="!loginname">
          <li class="login" @click="goEnter"><a>登录</a></li>
        </ul>
        <div class="login-yes" v-if="loginname">
          <div class="avartar"><img v-if="avatar_url" :src="avatar_url"/></div>
          <div class="info">
            <p v-if="loginname" v-text="loginname"></p>
          </div>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                loginname: localStorage.loginname || '',
                avatar_url: localStorage.avatar_url || '',
            }
        },
        methods:{
            goEnter(){
              var link = '/api/login';
              this.$route.router.go(link);
            },
            goUser(){
              this.$route.router.go( { name: 'user', params: { loginname: localStorage.loginname } } );
            }
        }
    }
</script>
