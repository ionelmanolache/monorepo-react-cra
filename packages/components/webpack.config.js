const path = require("path")

module.exports = (env) => {
    // console.log('Goal: ',env.goal, env);
    // console.log('Production: ', !!env.production)

    return {
        //mode: !!env.production ? 'production':'development',
        mode: 'production',

        entry: {
            components: './src/index.js'
        },

        resolve: {
            extensions: ['.js', '.jsx']
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
                            '@babel/react'
                        ]

                    }
                },
            ],
        },

        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'umd'
            },
            clean: true
        },

        externals: { react: 'react' }
    }
}