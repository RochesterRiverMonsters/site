var path = require('path');
var glob = require("glob");

let npmBase = path.join(__dirname, '../node_modules');
let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];

module.exports = {
    entry: [glob.sync("./src/main/js/*.js"), ],
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/assets/js/rrmbundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
