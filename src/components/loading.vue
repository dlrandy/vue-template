<template>
    <div>
      <div id="BP_Loading" class="ui-loading-wrap" v-show="show"><p class="mask"><span></span></p></div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>

    export default{
        props: ['show']
    }
</script>
