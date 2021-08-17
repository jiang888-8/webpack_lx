import $ from "jquery";
import "./css/index.css";
import "./less/index.less";
import "./asset/fonts/iconfont.css";

// 引入图片-使用
import imgUrl from "./asset/cxk.gif";
const theImg = document.createElement("img");
theImg.src = imgUrl;
document.body.appendChild(theImg);

$(function () {
  $("#ys li:nth-child(odd)").css("color", "#04f4bc");
  $("#ys li:nth-child(even)").css("color", "#0f8b4c");
});

const fn = () => {
  console.log("你好babel");
};
console.log(fn);
