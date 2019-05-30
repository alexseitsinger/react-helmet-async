const path = require("path")


module.exports = {
    target: "node",
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
}
