const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./src/index.js" }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/react',
                        {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]

                }
            },
        ],
    },
    output: {
        //path: path.resolve(__dirname, 'lib'),
        filename: "components.bundle.min.js",
        library: 'imaComponents',
        libraryTarget: 'umd',
        clean: true
    },
    externals: {react: 'react'}
}