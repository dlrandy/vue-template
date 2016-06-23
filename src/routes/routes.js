export function configRouter(router) {
	router.map({
		'/': {
			component: require('../containers/Home.vue')
		},
		'/about': {
			component: function(resolve){
        return require(['../containers/About.vue'], resolve);
      }
		},
		'*': {
			component: function(resolve){
        return require(['../containers/NotFound.vue'], resolve);
      }
		}
		// '/sayDetail/:id': {
		// 	component: require('../containers/sayDetail.vue')
		// },
		// '/articleDetail/:id': {
		// 	component: require('../containers/sayDetail.vue')
		// }
	});
}
