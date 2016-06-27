import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import { configRouter } from './routes/routes';

Vue.config.debug = true;
Vue.config.devtools = true;

Vue.use(VueRouter);
const router = new VueRouter({
	history: true,
	saveScrollPosition: true
});
configRouter(router);
//global.api这里extend用不用对象参数，最终都会返回一个组件构造器的
router.start(Vue.extend(App),'#root');

window.router = router;
