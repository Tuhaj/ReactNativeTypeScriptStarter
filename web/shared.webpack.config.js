// @flow
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  productionPlugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
}