const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { template } = require('lodash');
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/,
            
          },
          {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
              // {
              //   loader: MiniCssExtractPlugin.loader,
              // },
              'style-loader',
              'css-loader',
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(png|jpg|gif)$/i,
            loader: 'file-loader?name=assets/covers/[name].[ext]',
            
          },
          {
            test: /\.mp3$/i,
            loader: 'file-loader?name=assets/songs/[name].[ext]',
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          // {
          //   test: /\.s[ac]ss$/i,
          //   use:[ 
          //     // Creates `style` nodes from JS strings
          //     'style-loader',
          //     // Translates CSS into CommonJS
          //     'css-loader',
          //     // Compiles Sass to CSS
          //     'sass-loader',
          //   ]
          // },
        ],
        // preLoaders:[
        //   { test: /\.js$/, loader: "source-map-loader" }
        // ]
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: 
    [new HtmlWebpackPlugin
      ({
        // filename: indexOutput,
        // template: indextInput
      }),
     
      new MiniCssExtractPlugin()
    ],
    
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8888,
        open: true,
        hot: true,
        watchOptions : {
          poll: true
        }

    }
};