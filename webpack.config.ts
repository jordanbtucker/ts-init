import {basename, dirname, resolve} from 'path'
import type {Configuration} from 'webpack'
import {unpkg} from './package.json'

const config: Configuration = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  output: {
    filename: basename(unpkg),
    library: {
      name: 'TSInit',
      type: 'umd',
    },
    path: resolve(dirname(unpkg)),
  },
  devtool: 'source-map',
}

export default config
