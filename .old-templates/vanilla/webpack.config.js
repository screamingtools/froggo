const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProduction = process.env.NODE_ENV == 'production'

// plugins to run in production
const prodPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),

  new MiniCssExtractPlugin({
    filename: './assets/app.css',
    chunkFilename: '[id].css'
  }),

  new CopyWebpackPlugin({
    patterns: [
      { from: './src/assets', to: 'assets' },
      { from: './src/public', to: '.' }
    ]
  })
]

// plugins to run during development
const devPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),

  new MiniCssExtractPlugin({
    filename: './assets/app.css',
    chunkFilename: '[id].css'
  }),

  new webpack.HotModuleReplacementPlugin(),

  new CopyWebpackPlugin({
    patterns: [
      { from: './src/assets', to: 'assets' },
      { from: './src/public', to: '.' }
    ]
  })

  // analyze webpack bundle
  // new BundleAnalyzerPlugin()
]

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
    clean: true
  },
  target: 'web',
  stats: false,
  devServer: {
    host: 'localhost',
    port: 8888,
    watchFiles: path.join(__dirname, 'src')
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: isProduction ? prodPlugins : devPlugins
}

module.exports = () => {
  if (isProduction) {
    console.log('Building production bundle...')
    config.mode = 'production'
  } else {
    console.log('Building development bundle...')
    config.mode = 'development'
  }
  return config
}
