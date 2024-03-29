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
      //字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name]-[hash:6][ext]",
        },
      },
      //es高级语法
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  //配置端口，自动打开
  // devServer: {
  //   port: 3000, // 端口号
  //   open: true,
  // },
  mode: "development", //开发模式
  // mode: "production", //上线模式（极简模式）
};
