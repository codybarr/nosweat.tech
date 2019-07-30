<template>
	<nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
		<div>
			<g-link v-if="theme === 'theme-light'" to="/">
				<g-image src="../../static/logo.svg" class="w-32" alt="logo" />
			</g-link>
			<g-link v-else to="/">
				<g-image src="../../static/logo_dark_mode.svg" class="w-32" alt="logo" />
			</g-link>
		</div>
		<div v-if="isOpen" class="burger-wrapper flex lg:hidden" data-ix="burger-click" @click="toggle">
			<div
				class="line-1"
				style="transform-style: preserve-3d; transition: transform 200ms ease 0s; transform: translateX(0px) translateY(7px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(45deg);"
			></div>
			<div
				class="line-2"
				style="transition: opacity 200ms ease 0s, width 200ms ease 0s; opacity: 0; width: 0px;"
			></div>
			<div
				class="line-3"
				style="transform-style: preserve-3d; transition: transform 200ms ease 0s; transform: translateX(0px) translateY(-7px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(-45deg);"
			></div>
		</div>
		<div v-else class="burger-wrapper flex lg:hidden" data-ix="burger-click" @click="toggle">
			<div
				class="line-1"
				style="transform-style: preserve-3d; transition: transform 200ms ease 0s; transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
			></div>
			<div
				class="line-2"
				style="transition: opacity 200ms ease 0s, width 200ms ease 0s; opacity: 1; width: 24px;"
			></div>
			<div
				class="line-3"
				style="transform-style: preserve-3d; transition: transform 200ms ease 0s; transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
			></div>
		</div>

		<!-- <div class="block lg:hidden">
			<button
				@click="toggle"
				class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
			>
				<svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
				</svg>
			</button>
		</div>-->
		<ul
			class="mobileNav uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
			:class="isOpen ? 'block' : 'hidden'"
		>
			<!-- <li class="mr-8 mb-6 lg:mb-0">
				<search-input />
			</li>-->
			<li class="mr-8 mb-6 lg:mb-0">
				<theme-switcher />
			</li>
			<li
				v-for="link of ['features', 'projects', 'about', 'contact']"
				:key="link"
				class="mr-8 mb-6 lg:mb-0"
			>
				<a
					v-if="$route.path === '/'"
					:href="`/#${link}`"
					v-scroll-to="`#${link}`"
					class="link"
				>{{ link }}</a>
				<g-link v-else to="/#{link}" class="link">{{ link }}</g-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import { mapState } from 'vuex'

import SearchInput from '@/components/SearchInput'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default {
	components: {
		SearchInput,
		ThemeSwitcher
	},
	data() {
		return {
			isOpen: false
		}
	},
	computed: {
		...mapState(['theme'])
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen
		}
	}
}
</script>

<style scoped>
nav .link {
	@apply text-copy-primary;
}

nav .link:hover {
	@apply text-gray-600;
}

.burger-wrapper {
	position: relative;
	z-index: 201;
	width: 60px;
	height: 60px;
	padding: 15px;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: end;
	-webkit-align-items: flex-end;
	-ms-flex-align: end;
	align-items: flex-end;
	cursor: pointer;
}

.line-1 {
	width: 27px;
	height: 2px;
	@apply bg-background-contrast;
}

.line-2 {
	width: 20px;
	margin-top: 5px;
	margin-bottom: 5px;
	height: 2px;
	@apply bg-background-contrast;
}

.line-3 {
	width: 27px;
	height: 2px;
	@apply bg-background-contrast;
}

.mobileNav {
}
</style>