const distPath = __dirname + "/dist";

module.exports = {
	mode: "development",
	watch: true,
	devtool: "source-map",

	entry: [
		"./src/index.ts",
	],
	output: {
		filename: "openjrpg.js",
		path: distPath,
		library: "openjrpg"
	},

	resolve: {
		extensions: [".ts", ".js", ".json"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.ts$/, loader: "awesome-typescript-loader" },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
		]
	},
};