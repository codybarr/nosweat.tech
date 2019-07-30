// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const nested = require('postcss-nested')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind(), nested()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
	siteName: 'No Sweat Tech',
	siteDescription: 'Portfolio website of Cody Barr 🤙🏻',
	siteUrl: 'https://nosweat.tech',
	titleTemplate: 'No Sweat Tech',
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/projects/**/*.md',
				typeName: 'Project',
				remark: {
					plugins: [
						[
							'gridsome-plugin-remark-shiki',
							{ theme: 'Material-Theme-Palenight', skipInline: true }
						]
					]
				}
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'content/testimonials/**/*.md',
				typeName: 'Testimonial',
				remark: {
					plugins: [
						[
							'gridsome-plugin-remark-shiki',
							{ theme: 'Material-Theme-Palenight', skipInline: true }
						]
					]
				}
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000 // default
			}
		}
	],
	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link'
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins
			}
		}
	}
}
