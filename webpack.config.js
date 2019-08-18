const path = reqire('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    }
}