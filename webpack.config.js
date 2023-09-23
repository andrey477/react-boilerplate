const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env) => {
	const isProduction = env.mode === 'production';
	const target = isProduction ? 'browserslist' : 'web';

	return {
		target,
		mode: env.mode,
		entry: './src/index.ts',
		devtool: 'inline-source-map',
		devServer: {
			static: './dist'
		},
		output: {
			filename: "[name].[contenthash].js",
			path: path.resolve(__dirname, 'dist'),
			assetModuleFilename: "assets/[hash][ext][query]",
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: "Webpack App",
				minify: isProduction
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css',
			})
		],
		module: {
			rules: [
				{
					test: /\.(?:js|mjs|cjs)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							]
						}
					}
				},
				{
					test: /\.(css|scss|sass)$/i,
					include: path.resolve(__dirname, 'src'),
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						'sass-loader'
					],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
					include: path.resolve(__dirname, 'src'),
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					include: path.resolve(__dirname, 'src'),
					type: 'asset/resource',
				},
				{
					test: /\.tsx?$/i,
					include: path.resolve(__dirname, 'src'),
					exclude: /node_modules/,
					use: 'ts-loader'
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		optimization: {
			moduleIds: 'deterministic',
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					}
				}
			}
		},
	}
}
