
// 1
let boldTxt = document.querySelectorAll("p.first b");

// Для одного элемента
// boldTxt.onmouseover = function(){
//   boldTxt.style.color = "red";
// }
// boldTxt.onmouseout = function(){
//   boldTxt.style.color = "black";
// }

//Для массива элементов
boldTxt.forEach(function(el){
  el.onmouseover = function(){
    el.style.color = "#f00";
  }
  el.onmouseout = function(){
    el.style.color = "#000";
  }

});


// 2

let Text = document.getElementsByClassName("second")[0];
let boldText = Text.querySelectorAll("b");

Text.onmouseover = function(){
  boldText.forEach(function (el) {
    el.style.color = "red";
  })
};

Text.onmouseout = function(){
  boldText.forEach(function (el) {
    el.style.color = "black";
  })
};
