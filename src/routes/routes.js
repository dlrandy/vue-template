export function configRouter(router) {
	router.map({
		'/': {
			name: 'list',
      pageType: '说说',
			component: require('../containers/Home.vue')
		},
    '/articles': {
      name: 'articles',
      pageType: '文章',
      component: require('../containers/articles.vue')
    },
    '/circles': {
      name: 'circles',
      pageType: '小圈子',
      component: require('../containers/Home.vue')
    },
    '/writers': {
      name: 'writers',
      pageType: '发表文章的人',
      component: require('../containers/Home.vue')
    },
		'/about': {
			name: 'about',
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
