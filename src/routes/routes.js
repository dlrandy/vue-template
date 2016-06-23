export function configRouter(router) {
	router.map({
		'/': {
			component: require('../containers/Home.vue')
		},
		'/about': {
			component: require('../containers/About.vue')
		},
		'*': {
			component: require('../containers/NotFound.vue')
		}
		// '/sayDetail/:id': {
		// 	component: require('../containers/sayDetail.vue')
		// },
		// '/articleDetail/:id': {
		// 	component: require('../containers/sayDetail.vue')
		// }
	});
}