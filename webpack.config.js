const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// // 1. import default from the plugin module
// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
// // 2. create a transformer;
// // the factory additionally accepts an options object which described below
// const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },  
    output: {
        filename: 'bundle.js',
        // path.resolve vs path join
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js')
          },
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        port: 3000
    }
};
