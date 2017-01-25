import path from 'path';

export default {
    entry: './src/solution',
    noInfo: false,
    output: {
        path: __dirname + '/build',
        filename: 'solution.js'
    },
    target: 'node',
    module: {
        loaders: [
            { test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'babel'}
        ]
    }
}