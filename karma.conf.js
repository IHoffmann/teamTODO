// Karma configuration
// Generated on Wed Jun 29 2016 09:26:10 GMT-0500 (CDT)
const webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.externals = [];
delete webpackConfig.entry;
delete webpackConfig.output;
webpackConfig.module.loaders[0].query.plugins = [];
delete webpackConfig.module.loaders[0].query.extra;

const path = require('path');
const preprocessors = ['webpack', 'sourcemap'];

// load isparta preloaders and settings for use in coverage metrics
webpackConfig.isparta = {
    embedSource: true,
    noAutoWrap: true,
    babel: {
        presets: ['es2015', 'react']
    }
};

webpackConfig.module.loaders.push({
    test: /\.js$/,
    include: [
        path.join(__dirname, '/actions/*.js'),
        path.join(__dirname, '/components/*.js'),
        path.join(__dirname, '/containers/*.js'),
        path.join(__dirname, '/reducers/*.js'),

    ],
    loader: 'isparta'
});

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'tests/index.js'
        ],
        preprocessors: {
            'tests/index.js': preprocessors
        },
        reporters: ['progress', 'coverage'],
        singleRun: (false),
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            reporters: [
                { type: 'text-summary' },
                { type : 'lcov' }
            ]
        },
        browserNoActivityTimeout: 100000
    });
};
