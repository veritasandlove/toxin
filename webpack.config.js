const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    plugins: [
        new CleanWebpackPlugin(),

        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html', // файл который вы получите на выходе
            template: path.resolve(__dirname, './src/index.pug'), // шаблон откуда будет взять файл pug
          }),
    ],

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/resource',
            },

            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },

            // Pug
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true, // просим pug-loader расставить отступы и переносы строк (иначе получим весь html-код в одну строку).gut
                }
            },
        ],
    }
}