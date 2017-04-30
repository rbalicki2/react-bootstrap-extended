import path from 'path';
import fs from 'fs';

import pkg from './package.json';

const allOtherFiles = fs.readdirSync('./src')
  .filter(fileName => fileName !== 'index.js')
  .reduce((accum, fileName) => ({
    ...accum,
    [`lib/${fileName}`]: `./src/${fileName}`,
  }), {});

module.exports = {
  entry: {
    'dist/react-bootstrap-extended.js': './src/index.js',
    ...allOtherFiles,
  },
  resolve: {
    modules: ['node_modules', __dirname],
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname),
    library: 'react-class-props',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: pkg.babel,
        },
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react',
      root: 'React',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
};
