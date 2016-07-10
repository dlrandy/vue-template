<template>
	<section id="sidebar" class="nav-list">
    <ul class="list-ul">
      <li class="icon-home" @click="closeMenuLeft" v-link="{name: 'list'}">说说</li>
      <li class="icon-circles" @click="closeMenuLeft" v-link="{name:'circles'}">圈子</li>
      <li class="icon-articles" @click="closeMenuLeft" v-link="{name: 'articles'}">文章</li>
      <li class="icon-writers " @click="closeMenuLeft" v-link="{name: 'writers'}">发表文章的人</li>
    </ul>
	</section>
</template>
<script>
	export default {
    methods: {
      closeMenuLeft: function () {
        document.querySelector("#drawer-toggle").checked=false;
      }
    }

	}
</script>
<style lang="sass">

</style>
