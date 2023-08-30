module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{webp,svg,jpg,png,html,json,js,css,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};