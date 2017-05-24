/**
 * Created by Echo on 2017/5/24.
 */
var path = require('path');

module.export = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname,'../dist/index.html'),
        assetsRoot: path.resolve(__dirname,'../dist'),
        assetsSubDirectory:'./static',
        assetsPublicPath: './',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js','css'],

    },
    dev: {
        env: require('./dev.env'),
        port:8090,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false

    }
}