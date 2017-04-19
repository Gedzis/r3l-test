import webpack from 'webpack';

export default {
    entry: [
        '/frontend/src/js/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: '/frontend/dist/',
        publicPath: '/static/',
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.js$/,
                loaders: ['ng-annotate']
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            }
        ]
    },
    target: 'web',
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
