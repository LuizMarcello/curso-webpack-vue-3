const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
/* Todos os componentes que usarem css, vão ser colocados 
   em um arquivo separado, todos estes css */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* Aqui é onde "tudo" vai acontecer */
module.exports = {
    /* Ponto de entrada */
    entry: './src/main.js'
}