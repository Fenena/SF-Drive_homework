const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js',
    },
    module: {
    	rules: [
      	{ 	
      		test: /\.css$/,
       		use:  [
          	{
            	loader: MiniCssExtractPlugin.loader,
            	options: {
              		esModule: true,
            	},
          	},
          	'css-loader',
     		],
    	},
		{
			test: /\.js$/,
			exclude: '/node_module/',
			use: 'eslint-loader'
		}]
    },
    plugins: [
    	new MiniCssExtractPlugin({filename: 'style.css'}),
    	new HtmlWebpackPlugin({template: './src/index.pug', filename: 'index.html'}),
    	new TerserWebpackPlugin(),
    	new StylelintPlugin({files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    }),
    ],
    optimization: {
    	minimize: true,
    	minimizer: [new TerserWebpackPlugin()],
  	},
}