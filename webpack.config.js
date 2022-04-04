const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', // Modo de desenvolvimento ou produção
    entry: './src/principal.js', // ponto de entrada da configuração
    output: {
        filename: 'principal.js', // arquivo de saida 
        path: __dirname + '/public' // pasta de saida 
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css',
        })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // este plugin entra em conflito com o de baixo 
                // 'style-loader', // Loader responsavel por adicionar CSS a dom injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}