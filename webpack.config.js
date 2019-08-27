const path = require(`path`);

module.exports = {
  entry: `./src/main.js`,
  output: {
    path: path.join(__dirname, `public`),
    filename: `bundle.js`
  },
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, `public`)
  },
  devtool: `source-map`
};
