// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import Vuex from 'vuex'

export default function(Vue, { router, head, isClient, appOptions }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)

	Vue.use(VueScrollTo, {
		duration: 500,
		easing: 'ease'
	})

	Vue.use(Vuex)

	appOptions.store = new Vuex.Store({
		state: {
			theme: 'theme-dark'
		},
		mutations: {
			toggleTheme(state) {
				const newTheme =
					state.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
				localStorage.setItem('theme', newTheme)
				state.theme = newTheme
			},
			init(state) {
				state.theme = localStorage.getItem('theme') || 'theme-dark'
			}
		}
	})

	head.meta.push({
		name: 'keywords',
		content:
			'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
	})

	// head.meta.push({
	// 	name: 'description',
	// 	content: 'Gridsome Portfolio Starter'
	// })

	head.meta.push({
		name: 'author',
		content: 'Cody Barr'
	})

	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
	})
}
