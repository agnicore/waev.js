var config = {
  devtool: "source-map"
};

var cfgWaev = {
  ...config,
  entry: {
    waev: "./waev/type.js"
  },
  output: {
    path: __dirname + "../../out/waev",
    filename: "wv.js"
  }
};

var cfgWaevUi = {
  ...config,
  entry: {
    waev: "./waev-ui/browser.js"
  },
  output: {
    path: __dirname + "../../out/waev-ui",
    filename: "wv-ui.js"
  }
};

module.exports = [
  cfgWaev,
  cfgWaevUi
  // opan: in future try to set npm node_modules to out
  // resolve: {
  //   modules: [__dirname + "../../../out/node_modules"]
  // }
];
//https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config
