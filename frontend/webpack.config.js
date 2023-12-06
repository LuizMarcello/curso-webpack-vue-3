const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
/* Todos os componentes que usarem css, vão ser colocados 
   em um arquivo separado, todos estes css */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* Aqui é onde "tudo" vai acontecer */
module.exports = {
    /* Ponto de entrada */
    /* Neste arquivo, tudo vai ser compilado */
    entry: './src/main.js',
    /* Vai ser compilado para este lugar */
    output: {
        path: process.env.NODE_ENV == 'development' ? __dirname : path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            }

        ]
    }

}