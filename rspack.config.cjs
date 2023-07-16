const fs = require("fs").promises;
const path = require("path");

const output = {
	path: path.join(__dirname, "./extension/dist"),
	filename: "[name].[contenthash:5].js",
	//!! publicPath: "./........",
};

const swcLoader = {
	loader: "swc-loader",
	options: {
		jsc: {
			transform: {
				react: {
					runtime: "automatic",
				},
			},
			paths: {
				"~components/*": ["./src/components/*"],
				"~hooks/*": ["./src/hooks/*"],
				"~utils/*": ["./src/utils/*"],
			},
			parser: {
				syntax: "typescript",
				tsx: true,
			},
		},
	},
};
const postCssLoader = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: {
				tailwindcss: {},
			},
		},
	},
};

const prodConfig = {
	context: __dirname,
	mode: "production",
	devtool: false,
	output: output,
	entry: {
		main: "./src/main.tsx",
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, use: swcLoader },
			{ test: /\.css$/, use: [postCssLoader], type: "css" },
			{ test: /\.(png|svg|jpg|gif)$/, type: "asset/resource" },
		],
	},
	builtins: {
		html: [{ template: "./index.html" }],
		copy: {
			patterns: [{ from: "public" }],
		},
	},
	resolve: {
		modules: ["node_modules"],
		alias: {
			"~": path.resolve(__dirname, "src"),
		},
	},
};

module.exports = function (_env, argv) {
	console.log(_env, argv);
	// process.env.NODE_ENV === "development";
	if (argv.mode === "development") {
		const devConf = { mode: "development", devtool: "source-map", stats: "errors-only" };
		const devServer = {
			// port: process.env.PORT || 3000,
			// webSocketTransport: "ws",
			// webSocketServer: "ws", // ws, sockjs
			// historyApiFallback: true,
			// compress: true,
			// client: { overlay: true, progress: false, },
			proxy: {
				"/api/": {
					target: "http://192.168.11.11:4000",
					changeOrigin: true,
				},
				"/PokeAPI/": {
					target: "http://192.168.11.11:4000",
					// changeOrigin: true,
				},
			},
		};
		return { ...prodConfig, ...devConf, devServer };
	}
	(async function _delete(di) {
		let stat = await fs.stat(di);
		if (stat.isDirectory()) {
			let dis = await fs.readdir(di);
			await Promise.all(dis.map((item) => _delete(path.join(di, item))));
			// await fs.rmdir(di);
		} else if (stat.isFile()) {
			await fs.unlink(di);
		}
	})(prodConfig.output.path).then(console.error);
	return prodConfig;
};
