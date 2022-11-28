const path = require('path');

module.exports = () => {
    return {
        //mode: !!env.production ? 'production':'development',
        entry: {
            components: './src/index.js'
        },

        externals: { react: 'react' },

        mode: 'production',

        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    },
                    test: /\.(js|jsx)$/
                }
            ]
        },

        output: {
            clean: true,
            filename: '[name].bundle.js',
            library: {
                type: 'umd'
            },
            path: path.resolve(__dirname, 'dist'),
        },

        resolve: {
            extensions: ['.js', '.jsx']
        }
    };
};
