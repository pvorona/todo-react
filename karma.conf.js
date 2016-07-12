webpack = require('./webpack.config')

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
        './src/**/*.spec.js': [ 'webpack' ]
    },
    plugins: [
        require('karma-webpack'),
        'karma-mocha',
        'karma-chai',
        'karma-chrome-launcher'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack,
    webpackMiddleware: {
        noInfo: true
    }
  })
}
