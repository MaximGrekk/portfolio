// let counter = -1;
// let counter_timer = 0;
//
// function close() {
//   $("#myOverlay").addClass("d-none");
// }
//
//
// function func() {
//   $(".button").removeAttr("onclick");
//   counter++;
//   if(counter <= 5){
//     switch (counter) {
//       case 0:
//         $(".button").html("<span>" + counter + " секунд </span>").addClass("buttonTimer");
//         break;
//       case 1:
//         $(".button").html("<span>" + counter + " секунда </span>").addClass("buttonTimer");
//         break;
//       case 2:
//         $(".button").html("<span>" + counter + " секунды </span>").addClass("buttonTimer");
//         break;
//       case 3:
//         $(".button").html("<span>" + counter + " секунды </span>").addClass("buttonTimer");
//         break;
//       case 4:
//         $(".button").html("<span>" + counter + " секунды </span>").addClass("buttonTimer");
//         break;
//       case 5:
//         $(".button").html("<span>" + counter + " секунд </span>").addClass("buttonTimer");
//         break;
//     }
//     console.log(counter);
//     setTimeout("func()", 1000);
//   }
//   else if(counter > 5){
//     $(".button").html("<span> Готово </span>").addClass("buttonActive");
//   }
//
//   setTimeout(function (){
//     $(".timer").removeClass("d-none");
//     timer();
//   }, 10500)
// }
//
// function timer(){
//   let i = 0;
//   let id = setInterval(function() {
//     i++;
//     if(i == 51) {
//       clearInterval(id);
//       $("#myOverlay").removeClass("d-none");
//     } else {
//       $(".timer").html("<span class='counterInTimer'>" + i + "</span>");
//       console.log(i);
//     }
//   }, 40);
// }

let counter = -1;
let counter_timer = 0;

$('.js-btn-close').on('click', function () {
    $('.overlay').hide();
});


function func() {
    $(".button").removeAttr("onclick");
    counter++;
    if (counter <= 5) {
        switch (counter) {
            case 0:
                $(".button").html("<span>" + counter + " секунд </span>").addClass("buttonTimer");
                break;
            case 1:
                $(".button").html("<span>" + counter + " секунда </span>").addClass("buttonTimer");
                break;
            case 2:
                $(".button").html("<span>" + counter + " секунды </span>").addClass("buttonTimer");
                break;
            case 3:
                $(".button").html("<span>" + counter + " секунды </span>").addClass("buttonTimer");
                break;
            case 4:
                $(".button").html("<span>" + counter + " секунды </span>").addClass("buttonTimer");
                break;
            case 5:
                $(".button").html("<span>" + counter + " секунд </span>").addClass("buttonTimer");
                break;
        }
        console.log(counter);
        setTimeout("func()", 1000);
    } else if (counter > 5) {
        $(".button").html("<span> Готово </span>").addClass("buttonActive");
    }

    setTimeout(function () {
        $(".timer").removeClass("d-none");
        timer();
    }, 10500)
}

let count = 0;
let timeOut;
function timer() {
    timeOut = setInterval(function () {
        if (count === 50) {
            $("#myOverlay").removeClass("d-none");
            clearTimeout(timeOut);
        } else {
            $(".counterInTimer").html(count + 1);
            count++;
        }
    }, 100);
}
 
