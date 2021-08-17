const path = require("path");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 以此为基准生成打包后html文件
    }),
  ],
  module: {
    rules: [
      //css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //less
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //图片
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset",
      },
    ],
  },
};
