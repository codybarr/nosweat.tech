<template>
	<div id="projects" class="projects container-inner mx-auto text-xl border-gray-500 pb-16 relative">
		<h2 class="heading">Here are some projects I've worked on:</h2>

		<div class="absolute right-0">
			<svg width="170px" height="170px">
				<use xlink:href="#dots-triangle" />
			</svg>
		</div>

		<article v-for="{ node } of $static.allProject.edges" :key="node.id" class="project">
			<div class="block md:hidden thumbnail w-full image-wrapper pb-4">
				<g-link :to="node.image.src" target="_blank">
					<figure class="image is-2by3">
						<g-image :src="node.image" class="object-cover object-top"></g-image>
					</figure>
				</g-link>
			</div>
			<div class="hidden md:block thumbnail w-1/2 image-wrapper">
				<g-link :to="node.image.src" target="_blank" :alt="node.name + ' screenshot'">
					<figure class="image is-2by3">
						<g-image :src="node.image" class="object-cover object-top" :alt="node.name + ' thumbnail'"></g-image>
					</figure>
				</g-link>
			</div>
			<div class="copy w-full md:w-1/2 pr-4">
				<h3 class="text-2xl font-bold mb-4">{{ node.name }}</h3>
				<div class="content text-base" v-html="node.content"></div>
				<a :href="node.url" target="_blank" class="btn mb-4">Visit Site</a>
				<p v-if="node.tech && node.tech.length" class="text-sm font-bold">
					Tech used:
					<span class="tech" v-html="node.tech.join(', ')"></span>
				</p>
			</div>
		</article>
	</div>
	<!-- end projects -->
</template>

<static-query>
query Projects {
  allProject {
    edges {
      node {
        id
        name
        image(width: 600)
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

	transition: 0.5s ease;
}

.image-wrapper {
	max-height: 400px;
	transition: 0.25s ease;
	clip-path: polygon(10% 0%, 100% 0, 90% 100%, 0 100%);
}

.image-wrapper:hover {
	clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 100%);
}

.image-wrapper:hover img {
	transform: scale(1.12);
	filter: brightness(70%);
	cursor: pointer;
}
</style>
