module.exports = {
    // entry
    // 実行の起点となるファイル
    entry: './entry.js',

    // output
    // 出力に関する設定
    output: {
        filename: 'output.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                options: {
                    presets: ['react']
                }
            }
        ]
    }
};