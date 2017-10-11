// Karma configuration
// Generated on Wed Oct 11 2017 09:07:24 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      // 'test/**/*.spec.js',
      // 'src/**/*.js',
      'test/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
          // only specify one entry point
          // and require all tests in there
          'test/index.js': ['webpack']
      },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

      browserNoActivityTimeout: 60000,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

      webpack: {
          // webpack configuration
          // module: {
          //     loaders: [
          //         {test: /\.css$/, loader: "style!css"},
          //         {test: /\.less$/, loader: "style!css!less"}
          //     ],
          //     postLoaders: [{
          //         test: /\.js/,
          //         exclude: /(test|node_modules|bower_components)/,
          //         loader: 'istanbul-instrumenter'
          //     }]
          // },
          // resolve: {
          //     modulesDirectories: [
          //         "",
          //         "src",
          //         "node_modules"
          //     ]
          // }
      },

      webpackMiddleware: {
          // webpack-dev-middleware configuration
          noInfo: true
      },

      // plugins: [
      //     require("karma-webpack"),
      //     require("istanbul-instrumenter-loader"),
      //     require("karma-mocha"),
      //     require("karma-coverage"),
      //     require("karma-phantomjs-launcher"),
      //     require("karma-spec-reporter")
      // ],
  })
}
