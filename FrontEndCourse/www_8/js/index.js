// 1 работа с BOM

// console.log(window.innerWidth);
// window.open("about:blank", "hello", "width=200, height=200");

// console.log(navigator.platform);
// console.log(location.href);
// setTimeout(function(){
//   location.reload();
// }, 2000);

// location.href = "https://itproger.com";


// 2 DOM структура


// console.log(document.body);
// console.log(document.body.childNodes);
// for(var i = 0; i < document.body.childNodes.length; i++){
//    console.log(document.body.childNodes[i]);
// }

// let cont ent = document.getElementById("content");
// let elements = content.getElementsByTagName("*")[0];
// console.log(elements);
// for(var i = 0; i < elements.length; i++){
//   console.log(elements[i]);
// }

// let el = document.getElementsByName("fname")[0].tagName;
// console.log(el);
//
// let allClasses = document.getElementsByClassName("some");
// console.log(allClasses.length);
//
// let elements = document.querySelectorAll("ul.test > li");
// console.log(elements);
// console.log(elements.length);
//
// let element = document.querySelector("#content");
// console.log(element);

// let ulItems = document.querySelector("#span-text");
// let ulItems = document.querySelectorAll(".span-text")[0];
// console.log(ulItems.closest(".some-test"));
// let parentLi = ulItems.closest(".some-test");
//
// parentLi.innerHTML = "Новое значение";
// let input = document.querySelector("input[type]");
// if(input != null){
//   input.value = "sooome"
//
//   input.setAttribute("data-toogle", "someValue");
//   input.setAttribute("type", "text");
//
//   if(input.hasAttribute("type"))
//     alert(input.getAttribute("class"));
//
//   input.className = "some new test"
//   alert(input.getAttribute("class"));
//
//   input.removeAttribute("class");
// }
//
// document.write("");
//
// input.style.backgroundColor = "#bbb";
// input.style.color = "#fff";
// input.style.border = "2px solid silver";
// input.style.borderRadius = "5px";
// input.style.padding = "10px 15px";


// 3 События

// function clickHref(){
//   alert("Hello, guys!");
//   document.querySelector("a.href").style.color = "#333";
//   document.querySelector("a.href").style.textDecoration = "none";
// }
//
//
//
// function clickText(selector){
//   document.querySelector(selector).style.backgroundColor = "#333";
//   document.querySelector(selector).style.color = "#fff";
// }
//
//
// let input = document.querySelector("input");
//
// // function focusEvent(){
// //   document.querySelector("input").style.backgroundColor = "#333";
// //   document.querySelector("input").style.padding = "10px";
// //   document.querySelector("input").style.border = "0px";
// // }
// //
// // function focusEndEvent(){
// //   document.querySelector("input").style.backgroundColor = "#fff";
// //   document.querySelector("input").style.padding = "0px";
// //   document.querySelector("input").style.border = "1px solid silver";
// // }
//
// function focusEvent(){
//   input.style.backgroundColor = "#333";
//   input.style.padding = "10px";
//   input.style.border = "0px";
// }
//
// function focusEndEvent(){
//   input.style.backgroundColor = "#fff";
//   input.style.padding = "0px";
//   input.style.border = "1px solid silver";
// }
//
// // window.onclick = function(){
// //   console.log("click");
// // };
//
// input.onmouseover = function(){
//   console.log("onmouseover");
// };
//
// window.onresize = function(){
//   console.log("changing");
// };
//
// window.onload = function(){
//   console.log("yes");
// };
//
//
// window.onscroll = function(){
//   console.log("scroll");
// }
//
// let textArea = document.querySelector(".fullText");
// textArea.oninput = function(){
//   console.log("You are input something in this textarea!");
// }
//
// // --------------------------------- обработчики событий  --------------------------------- //
//
// function handlerOver(){
//   block.innerHTML = "New text";
// }
// function handlerOut(){
//   block.innerHTML = "Hello World!";
// }
// let block = document.querySelector(".block");
// block.addEventListener("mouseover", handlerOver); // здесь уже не нужна приставка on
// block.addEventListener("mouseout", handlerOut);
// block.removeEventListener("mouseout", handlerOut);


// 4 события на клавиатуре/мыше


// let text = document.querySelector(".full-text");
//
// text.onkeypress = function(e){
//   console.log("onkeypress: " + text.value);
// }
// text.onkeydown = function(e){
//   console.log("onkeydown: " + text.value);
// }
// text.onkeyup = function(e){
//   console.log("onkeyup: " + text.value);
// }
//
// let boldText = document.querySelectorAll("p > b.bold-txt");
//
// boldText.forEach(function(el){
//   el.onmousedown = function(){
//     el.style.color = "red";
//   }
//   el.onmouseup = function(){
//     el.style.color = "blue";
//   }
//   el.oncontextmenu = function(){
//     el.style.color = "green";
//   }
// });

// Для querySelector без All
// boldText.onmousedown = function(){
//   boldText.style.color = "red";
// }
// boldText.onmouseup = function(){
//   boldText.style.color = "blue";
// }
// boldText.oncontextmenu = function(){
//   boldText.style.color = "green";
// }

// let mainDiv = document.querySelector("main-div");
// let inputField = document.querySelector("input.input");
// let helpField = document.querySelector(".hint");
//
//
// inputField.onmouseenter = function(){
//   helpField.style.display = "block";
// }
// inputField.onmousemove = function(e){
//   helpField.style.left = e.pageX + "px";
//   helpField.style.top = e.pageY + "px";
// }
// inputField.onmouseleave = function(){
//   helpField.style.display = "none";
// }


// 5 События на сенсорных устройствах


// let tap = document.getElementById("tap");
//
// window.addEventListener('touchstart', function(e){
//   tap.style.background = "black";
// });
// window.addEventListener('touchmove', function(e){
//   tap.style.left = e.targetTouches[0].pageX + "px"; // массив[0] - касание первого пальца
//   tap.style.top = e.targetTouches[0].pageY + "px";
// });
// window.addEventListener('touchend', function(e){
//   tap.style.background = "#eee";
// });



// 6 AJAX

// setTimeout(function(){
//   console.log(7);
// }, 2000);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
///////////////////
//NOT UNDERSTAND!//
///////////////////
// let load = function(url, callback){
//   let ajax = new XMLHttpRequest();
//   ajax.open('GET', url);
//   ajax.onload = function(){
//     callback(this.responseText)
//   };
//   ajax.send();
// };
//
// load('text.txt', function(data){
//   console.log(data);
// });


// 7

// В ФАЙЛЕ check.js

































































// end
