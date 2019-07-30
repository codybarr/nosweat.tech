// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs')
const path = require('path')
const pick = require('lodash.pick')

module.exports = function(api, options) {
	api.loadSource(store => {
		// Use the Data store API here: https://gridsome.org/docs/data-store-api
	})
}
