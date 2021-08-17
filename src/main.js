import $ from "jquery";
import "./css/index.css";

$(function () {
  $("#ys li:nth-child(odd)").css("color", "#04f4bc");
  $("#ys li:nth-child(even)").css("color", "#0f8b4c");
});
