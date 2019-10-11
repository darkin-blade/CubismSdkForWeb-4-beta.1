var apiAddress = "/";// 核心文件的根目录位置
var tipAddress = apiAddress + "Core/";// 提示框内容文件夹位置

var minNum = 0;// 模型的最小编号
var maxNum = 100;// 模型的最大编号
var totalNum = 0;// 总模型数

window.tips = new Array();// 用于clearInterval(取消无限鸡汤)
var thisMy = new Array();
var loadInterval = 0;// 如果是同时加载,请把interval调大

// 对于tips以及button的控制
var need_tips = 1;
var need_button = 1;

(function() {// 必须立即执行
  console.log("js manager start");
})();

function divCreate(num)
{
  // 拖拽元素
  var tempDrag = document.createElement("div");
  tempDrag.id = "drag_" + num;// 标号
  tempDrag.className = "drag";
  
  if (need_tips) {// TODO
    ;
  }

  // 画布
  var tempCanvas = document.createElement("canvas");
  tempCanvas.id = "glcanvas_" + num;// 标号
  tempCanvas.className = "glcanvas";
  tempCanvas.width = 600;
  tempCanvas.height = 600;
  tempDrag.appendChild(tempCanvas);// 添加至拖拽元素
  
  if (need_button) {// TODO
    var tempButton = document.createElement("div");// 按钮对齐用
    
    var tempChange = document.createElement("div");
    tempChange.id = "btnChange_" + num;// 标号
    tempChange.className = "btnChange";
    tempChange.textContent = "change";
    tempButton.appendChild(tempChange);// 添加至按钮组
    
    tempDrag.appendChild(tempButton);// 添加至拖拽元素
  }
  
  document.body.appendChild(tempDrag);// 添加至body
  $("#drag_" + num).css("width", "600px");// TODO
  $("#drag_" + num).css("height", "600px");// TODO

  myDrag();
}

function myDrag()
{// 使模型能够拖拽
  $(".drag").draggable({
    containment: document.body
  });
}

// === 针对4.0.0的修改 ===

var main = "TODO";// 全局主函数,此时未定义.定义位于main.js

$(document).ready(function () {
  console.log("JsManager document ready");
  divCreate(totalNum);
  main(totalNum);
  totalNum ++;
})