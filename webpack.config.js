const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    entry: [
        "webpack-dev-server/client?http://127.0.0.1:8080/",
        "webpack/hot/only-dev-server",
        "./src"
    ],
    output: {
        path: `${__dirname}/public`,
        filename: "index.js"
    },
    resolve: {
        modulesDirectories: ["node_modules", "src"],
        extensions: [
            "",
            ".js"
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"],
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
