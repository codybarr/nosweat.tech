<template>
	<div class="overflow-x-hidden">
		<div
			id="projects"
			class="projects container-inner mx-auto text-xl border-gray-500 pb-16 relative"
		>
			<h2 class="heading">Here are some projects I've worked on:</h2>

			<div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
				<svg width="170px" height="170px">
					<use xlink:href="#dots-triangle" />
				</svg>
			</div>

			<article v-for="{ node } of $static.allProject.edges" :key="node.id" class="project">
				<div class="block md:hidden thumbnail w-full image-wrapper pb-4">
					<g-link :to="node.image.src" target="_blank">
						<figure class="image is-2by3">
							<g-image :src="node.image" class="object-cover object-top" style="max-height: 300px;"></g-image>
						</figure>
					</g-link>
				</div>
				<div class="hidden md:block thumbnail w-1/2 image-wrapper">
					<g-link :to="node.image.src" target="_blank" :alt="node.name + ' screenshot'">
						<figure class="image is-2by3">
							<g-image :src="node.image" class="object-cover object-top" style="max-height: 300px;" :alt="node.name + ' thumbnail'"></g-image>
						</figure>
					</g-link>
				</div>
				<div class="copy w-full md:w-1/2 pr-4">
					<h3 class="text-2xl font-bold mb-4">{{ node.name }}</h3>
					<div class="content text-base" v-html="node.content"></div>
					<a :href="node.url" target="_blank" class="btn mb-4">Visit Site</a>
					<p v-if="node.tech && node.tech.length" class="text-sm font-bold">
						<!-- prettier-ignore-start -->
						Tech used: <span v-for="tech of node.tech" :key="tech" class="tech">{{ tech }}<span class="comma">,&nbsp;</span></span>
						<!-- prettier-ignore-end -->
					</p>
				</div>
			</article>
		</div>
		<!-- end projects -->
	</div>
</template>

<static-query>
query Projects {
  allProject {
    edges {
      node {
        id
        name
        image
        content
		url
		tech
      }
    }
  }
}
</static-query>

<style lang="postcss" scoped>
p {
	@apply pb-4;
}

article.project {
	@apply flex flex-col pb-10;
	&:not(:last-child) {
		@apply mb-10 border-b border-teal-900;
	}

	@screen md {
		@apply flex-row;

		&:nth-child(odd) .copy {
			@apply order-first pr-10;
		}

		&:nth-child(even) .thumbnail {
			@apply pr-10;
		}
	}

	.tech:last-child {
		.comma {
			display: none;
		}
	}
}

figure.image {
	overflow: hidden;
}

img {
	filter: brightness(100%);

	transition: 0.25s ease-in-out;
}

.image-wrapper {
	max-height: 400px;
}

.image-wrapper:hover img {
	transform: scale(1.12);
	filter: brightness(70%);
	cursor: pointer;
}
</style>