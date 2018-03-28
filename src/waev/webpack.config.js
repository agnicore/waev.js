module.exports = {
  devtool: "source-map",
  entry: {
    waev: "./type.js"
  },
  output: {
    path: __dirname + "../../../out/waev",
    filename: "wv.js"
  }
  // opan: in future try to set npm node_modules to out
  // resolve: {
  //   modules: [__dirname + "../../../out/node_modules"]
  // }
};
