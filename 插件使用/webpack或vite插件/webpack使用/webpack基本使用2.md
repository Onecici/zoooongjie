```js
// package.json

    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack-dev-server --hot --colors --inline --progress --mode=development --display verbose",
        "fat": "npm run dev --base=FAT",
        "uat": "npm run dev --base=UAT",
        "build": "cross-env NODE_ENV=production webpack --mode=production --progress --hide-modules",
        "deploy": "set npm_config_report=false&&npm run build&&gulp deploy",
        "deploy:inner": "set npm_config_report=false&&npm run build&&gulp innerDeploy",
        "analyz": "set npm_config_report=true&&npm run build"
    },

    
"cross-env NODE_ENV=development": 用于设置环境变量

"webpack-dev-server": 它提供了一个本地开发服务器

"--hot": 这是Webpack Dev Server的一个选项，这意味着在修改代码时，只会重新加载被修改的模块，而不是整个页面。

"--colors": 这是Webpack Dev Server的一个选项，它启用了彩色输出，使得终端中的日志更易于阅读。

"--inline": 这是Webpack Dev Server的一个选项，它将Webpack的构建结果以脚本的形式注入到HTML页面中，而不是使用独立的文件。

"--progress": 这是Webpack Dev Server的一个选项，它在终端中显示构建进度。

"--display verbose": 这是Webpack的一个选项，它在终端中显示更详细的构建信息。

// 以下两个设置webpack的参数都可以通过webpack.config.js配置文件中的module.exports函数形参上的第二个参数对象获取到对应的值
"--mode=development": 设置当前webpack执行的运行环境
"--base=FAT": 设置自定义参数
```

```js
// webpack.config.js


const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const compressionWebpackPlugin = require('compression-webpack-plugin')


const CopyWebpackPlugin = require('copy-webpack-plugin');
const gitCommitMessage = require('./version.js')
const version = gitCommitMessage.split(':')[1].slice(0, 8);

console.log(gitCommitMessage)

const path = require("path");
const webpack = require("webpack");

const isDevMode = process.env.NODE_ENV == "development";

module.exports = (env, args) => {
	const BASE = args.base || "FAT";
	console.info("当前运行环境:", BASE);
    
    // 配置多个不同运行环境的url
	const server = {
        DEV: {
			APP_BASE_URL: "",
			APP_CORON_URL: "",
            APP_MQTT_URL: "",
            APP_CDN_URL: "",
			APP_MQTT_NAME: "",
            APP_MQTT_PASSWORD: "",
        },
        FAT: {
            APP_BASE_URL: "",
			APP_CORON_URL: "",
            APP_MQTT_URL: "",
            APP_CDN_URL: "",
			APP_MQTT_NAME: "",
            APP_MQTT_PASSWORD: "",
			UPLOAD_URL: '',
        },
        UAT: {
			APP_BASE_URL: "",
			APP_CORON_URL: "",
            APP_MQTT_URL: "",
            APP_CDN_URL: "",
			APP_MQTT_NAME: "",
            APP_MQTT_PASSWORD: "",
			UPLOAD_URL: '',
        },
        PROD: {
            APP_BASE_URL: "",
			APP_CORON_URL: "",
            APP_MQTT_URL: "",
            APP_CDN_URL: "",
			APP_MQTT_NAME: "",
            APP_MQTT_PASSWORD: "",
			UPLOAD_URL: '',
        }
    };

	const APP_BASE_URL = server[BASE].APP_BASE_URL;
	const APP_MQTT_URL = server[BASE].APP_MQTT_URL;
	const APP_CDN_URL = server[BASE].APP_CDN_URL;
	const UPLOAD_URL =  server[BASE].UPLOAD_URL;
	const APP_CORON_URL =  server[BASE].APP_CORON_URL;

	
	let publicPath = '/';
    //如果是build，使用cdn域名
    if (!isDevMode) {
        publicPath = '/newh5/';
        console.log('使用cdn域名：', publicPath);
    }else{
        console.log('使用cdn域名：', false);
	}

	let defineObj = {
        isDevMode: isDevMode,
		appMQTTName: server[BASE].APP_MQTT_NAME,
        appMQTTPassword: server[BASE].APP_MQTT_PASSWORD
    }
    if(isDevMode){
        defineObj.APP_CDN_URL = `"${APP_CDN_URL}"`;
        defineObj.APP_MQTT_URL = `"${APP_MQTT_URL}"`;
        defineObj.UPLOAD_URL = `"${UPLOAD_URL}"`;
    }

	const config = {
		entry: {
			build: "./src/main.js",
		},

		output: {
			path: path.resolve(__dirname, "./dist"),
			publicPath: publicPath,
			filename: `static/js/[name].${version}.js`,
			chunkFilename: `static/js/[id].${version}.js`,
		},
		stats: "errors-only",
		devtool: "#source-map",
		devServer: {
			// host: "0.0.0.0", //允许外部ip访问设定0.0.0.0
			host: '127.0.0.1',
			historyApiFallback: true,
			hot: true,
			inline: true,
			open: true,
			stats: {
			colors: true,
			},
			port: 8083,
			disableHostCheck: true,
			proxy: [
                // 接口
                {
                    context: ["/game", "/handicap", "/activity"],
                    target: APP_BASE_URL,
                    changeOrigin: true,
                    logLevel: "debug",
                    secure: false
                }, 
                // 静态图片资源
                {
                    context: ["/upload"],
                    target: UPLOAD_URL,
                    changeOrigin: true,
                    logLevel: "debug",
                    secure: false
                },
				// 彩票
				{
					context: ["/coron", "/boracay"],
					target: APP_CORON_URL,
                    changeOrigin: true,
                    logLevel: "debug",
                    secure: false
				},
			],
		},

		module: {
			rules: [
				{
					test: /\.vue/,
					loader: "vue-loader",
					options: {
						transformToRequire: {
							audio: "src",
						},
					},
				},
				{
                    test: /\.(png|jpg|gif)$/,
                    //use: "url-loader?limit=80000&&esModule=false&name=static/images/[name][hash].[ext]?"
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule: false,
                            name: 'static/images/[hash].[ext]',
                            publicPath: isDevMode ? '/' : '/newh5/',
                            postTransformPublicPath: (p) => {
                                // 动态加载的文件添加cdn前缀
                                return isDevMode ? `${p}` 
                                : `(global.APP_CDN_URL || '../../../') + ${p}`
                            },
                        },
                    }],
                },
                {
                    test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                    //use: "url-loader?limit=80000&esModule=false&name=static/fonts/[name].[ext]"
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            esModule: false,
                            name: 'static/fonts/[name].[ext]',
                            publicPath: isDevMode ? '/' : '/newh5/'
                        },
                    }],
                },
				{
					test: /\.(sa|sc)ss$/,
					use: [
						isDevMode ? "vue-style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"postcss-loader",
						// "sass-loader",
                        {
                            loader: "sass-loader",
                            options: {
                              implementation: require("sass")//使用dart-sass代替node-sass
                            }
                        }
					],
				},
				{
					test: /\.less$/,
					use: [
						isDevMode ? "vue-style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"postcss-loader",
						"less-loader",
					],
				},
				{
					test: /\.css$/,
					use: [
						isDevMode ? "vue-style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"postcss-loader",
					],
				},
				{
					test: /\.js|\.jsx$/,
					use: "babel-loader",
					exclude: /node_modules/, 
				},
				{
					test: /\.mp3|\.ogg(\?.*)?$/,
					loader: "url-loader",
					options: {
						limit: 10000,
						name: "static/audios/[name]-[hash].[ext]",
						// publicPath: isDevMode ? '/' : '/newh5/'
					}
				}
			],
		},
		resolve: {
			alias: {
			vue$: "vue/dist/vue.esm.js",
			"@": path.resolve(__dirname, "./src/"),
			},
			extensions: [".js", ".json", ".vue"],
		},
		plugins: [
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
                filename: "./index.html",
                template: "./src/index.html",
                inject: isDevMode,
                hash: false,
                minify: {
                    collapseWhitespace: true,
                    keepClosingSlash: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                    minifyJS: true,
                    minifyCSS: true,
                },
                gitCommitMessage: gitCommitMessage
            }),
			
			new CleanWebpackPlugin(["dist/**/*.*"], {
				root: path.resolve(__dirname, "."),
				exclude: [],
				verbose: true,
				dry: false,
			}),

      // MiniCssExtractPlugin打包时用来提取js文件中引入的css文件到单独的css文件
			new MiniCssExtractPlugin({
				filename: isDevMode ? "[name].css" : `static/css/[id].${version}.css`,
				chunkFilename: isDevMode ? "[name].css" : `static/css/[id].${version}.css`,
			}),

            // DefinePlugin创建全局变量可以在任意js文件中使用
			new webpack.DefinePlugin(defineObj),

      
      // CopyWebpackPlugin在我们使用Webpack的时候，有一些本地资源，例如图片和音视频，在打包过程中没有任何模块使用到它们，但我们却想要把它们放在打包后的某个目录下
			new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.posix.join(
                            path.resolve(__dirname).replace(/\\/g, '/'),
                            'src/assets/images/upload/*' 
                        ),

                        to: path.resolve(__dirname, 'dist/static/images/'),
                        flatten: true
                    },
					{
                        from: path.posix.join(
                            path.resolve(__dirname).replace(/\\/g, "/"),
                            "src/assets/video/"
                        ),

                        to: path.resolve(__dirname, "dist/static/video/"),
                        flatten: true,
                    }, 
                ]
            }),

			new compressionWebpackPlugin({
        // 这里filename格式固定不用变
				filename: '[path].gz[query]', 
				algorithm: 'gzip', 
				test: /\.(js|css|svg)$/,
				threshold: 10240,
				minRatio: 0.8, 
				deleteOriginalAssets: false 
			}),
			
		],
		optimization: {
			splitChunks: {
			chunks: "all",
			cacheGroups: {
				commons: {
				chunks: "initial",
				minChunks: 2,
				name: "commons",
				maxInitialRequests: 5,
				minSize: 0, // 默认是30kb,
				priority: 2,
				},
			},
			},
			runtimeChunk: {
				name: "manifest",
			},
			minimizer: [
				new TerserPlugin({
					terserOptions: {
					compress: {
						drop_console: true
						// pure_funcs:["console.log"],
					},
					},
				}),
				new OptimizeCSSAssetsPlugin({}),
        
        // 生成可视化查看打包后的体积大小
				new BundleAnalyzerPlugin({
					analyzerMode:
					process.env.npm_config_report == "true" ? "server" : "disabled",
				}),
			],
		},
	};
	return config;
};

```

