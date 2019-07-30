<template>
	<Layout>
		<div
			class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pb-16 items-center"
		>
			<div class="text-4xl font-bold w-full sm:w-3/5 text-center">
				<div class="leading-tight">I Build</div>
				<div class="text-blue-400 leading-tight">Spectacular Websites</div>
			</div>
			<div class="mt-8 sm:mt-0 w-1/2 mx-auto">
				<g-image src="../../static/coding.svg" alt="hero" class="mx-auto sm:mx-0" />
			</div>
		</div>
		<!-- end hero -->

		<div class="container-inner mx-auto">
			<Testimonials />

			<div class="flex justify-between items-center pb-16">
				<div class="w-1/2 px-8 hidden sm:flex justify-end">
					<g-image src="../../static/mind_map.svg" alt="browser" />
				</div>
				<div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
					<g-image src="../../static/code_review.svg" alt="mobile" />
				</div>
			</div>
		</div>

		<Features />

		<Projects />

		<div class="overflow-x-hidden border-gray-200">
			<div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
				<h2 class="heading" id="about">Get to know me</h2>

				<div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
					<svg width="170px" height="170px">
						<use xlink:href="#dots-triangle" />
					</svg>
				</div>

				<div class="flex flex-col md:flex-row justify-between items-center mb-16">
					<div>
						<g-image
							src="../../static/avatar.jpg"
							width="500"
							alt="avatar"
							class="w-32 h-32 rounded-full mb-8 lg:mb-0"
						/>
					</div>
					<div
						class="flex-1 text-lg sm:text-xl text-center md:text-left ml-6"
					>Current QA Engineer at Insite Technology. Aspiring Front-end Dev. Currently playing around with Vue.js, Gridsome, Tailwind CSS, and Netlify.</div>
				</div>
			</div>
		</div>
		<svg fill="currentColor" viewBox="0 0 1695 57" class="text-fill-primary">
			<path
				d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z"
			/>
		</svg>
		<Contact />
	</Layout>
</template>

<script>
import Features from '@/components/sections/Features'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default {
	components: {
		Features,
		Projects,
		Testimonials,
		Contact
	}
}
</script>
