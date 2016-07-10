import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import  Vuex from 'vuex';
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import FastClick from 'fastclick';
import { configRouter } from './routes/routes';

Vue.config.debug = true;
Vue.config.devtools = true;

Vue.use(VueRouter);
Vue.use(Vuex);
FastClick.attach(document.body);

const router = new VueRouter({
	history: true,
	saveScrollPosition: true
});
configRouter(router);
sync(store, router);
//global.api这里extend用不用对象参数，最终都会返回一个组件构造器的
router.start(Vue.extend(App),'#root');

window.router = router;
