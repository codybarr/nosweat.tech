<template>
	<div class id="testimonials">
		<div class="container-inner mx-auto pb-16 pb-8 text-center textl-xl">
			<h2 class="heading">What My Customers Are Saying</h2>
			<transition-group name="slide" class="carousel flex" tag="div">
				<blockquote
					v-for="({node}, index) of $static.allTestimonial.edges"
					v-show="show === index"
					:key="node.id"
					class="items-stretch"
				>
					<p v-html="node.content" class="text-base"></p>
					<cite>{{ node.person}}</cite>
				</blockquote>
			</transition-group>
		</div>
	</div>
</template>

<static-query>
query Testimonials {
  allTestimonial {
    edges {
      node {
		id
        person
        content
      }
    }
  }
}
</static-query>

<script>
export default {
	data() {
		return {
			time: 0
		}
	},
	mounted() {
		this.tick()
	},
	methods: {
		tick() {
			setInterval(() => {
				this.time++
			}, 6000)
		}
	},
	computed: {
		show() {
			return this.time % this.$static.allTestimonial.edges.length
		}
	}
}
</script>

<style lang="postcss" scoped>
.carousel {
	overflow: hidden;
	position: relative;

	min-height: 300px;

	@screen sm {
		min-height: 200px;
	}

	blockquote {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		@apply px-12 py-3;

		&:before {
			color: #7a7a7a;
			content: '\201C';
			display: block;
			font-size: 80px;
			padding-left: 10px;
			position: absolute;
			left: 0;
			top: -20px;
			@apply font-mono;
		}

		cite {
			@apply text-gray-600 text-sm;

			&:before {
				content: '\2014 \2009';
			}
		}
	}
}

.slide-leave-active,
.slide-enter-active {
	transition: 1s;
}
.slide-enter {
	transform: translate(100%, 0);
}
.slide-leave-to {
	transform: translate(-100%, 0);
}
</style>