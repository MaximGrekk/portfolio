// function changeBG(){
//   let object = document.querySelector("#object");
//   object.style.fill = "#b53232";
//   object.style.stroke = "#842121";
//   object.style.strokeWidth = "2";
// }

function ChangeWheel_1(){
  let objectWheel_1 = document.querySelector(".wheel_1");
  objectWheel_1.classList.remove("wheel_1");
  objectWheel_1.style.fill = "rgb(50, 64, 146)";
}

function ChangeWheel_2(){
  let objectWheel_2 = document.querySelector(".wheel_2");
  objectWheel_2.classList.remove("wheel_2");
  objectWheel_2.style.fill = "rgb(50, 64, 146)";
}

function ChangeWheel_2(){
  let objectWheel_2 = document.querySelector(".wheel_2");
  objectWheel_2.classList.remove("wheel_2");
  objectWheel_2.style.fill = "rgb(50, 64, 146)";
}

// document.querySelector(".object").onclick = function(){
//     document.querySelector(".object").style.position = "relative";
//     document.querySelector(".object").style.left = "60%";
//   }

function ChangePosition(){
  let car = document.querySelector("#object");
  // car.classList.add("objectRight");
  // console.log("CLICK!")
  car.style.transitionProperty = "left";
  car.style.transitionDuration = "3s";
  car.style.position = "relative";
  car.style.left = "75%";
}

function dblChangePosition(){
  let car = document.querySelector("#object");
  car.style.position = "relative";
  car.style.left = "0%";
  car.style.transitionProperty = "left";
  car.style.transitionDuration = "3s";
  // car.classList.add("objectLeft");
  // console.log("CLICK!")
}

// ;(function($, undefined){
  // $(".car").on("click", function(){
  //   $(".car").style({
  //     "position": "relative",
  //     "left": "60%"
  //   })
  // });
// })(jQuery);



//
