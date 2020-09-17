// $(function(){
// 	$("#message").delay(5000).slideUp(300);
// });
// $("#add").on("click", function(){
//   $(function(){$("#hidden-hint").addClass("hint").delay(1500).slideToggle(300);
// });
//   $("#hidden-hint").html("<p>Элемент был добавлен</p>");
//   $("#hidden-hint p").css({
//     "text-align": "center",
//     "margin-top": "25px",
//     "font-Weight": "600",
//     "color": "rgb(138, 138, 138)"
//   })
//
// });

//

// var $numPartOfList = 0;
// function addNum(){
//   if($('#add').on("click", function(){
//     if($('input').val() != 0){
//       $numPartOfList++;
//     }
//   }));
// }

// Добавление подсказки
function set_message(){
	var $item = $('<div class="hint"><p>Элемент был добавлен</p></div>');
  $($item).css({
      "text-align": "center",
      "padding-top": "25px",
      "font-Weight": "600",
      "color": "rgb(138, 138, 138)"
    });
  if($('input').val() != 0){
  	$item.appendTo($('#message-box')).delay(1500).slideUp(400, function(){
  		$item.remove();
  	});
  }
}

// Увеличение циферки
var $numPartOfList = 0;
function addNum() {
  if($('input').val() != 0){
    $numPartOfList++;
  };
}

var $partOfList;
// Добаление элемента списка
function addToList(){
  if($('input').val() != 0){
    var $partOfList = $('<div class="hiddenPartOfList"><h3>Задание #' + $numPartOfList + ': ' +  $('input').val() + '</h3></div>');
    $('.hidden-list #partOfList').append($partOfList).css({
      "display": "block",
      "position": "relative",
      "margin-top": "10px",
      "left": "30%",
      "color": "rgb(82, 82, 82)",
    });
    $(".hiddenPartOfList").css({"display": "none"});
  }
}

function displayList(){
  $(".notHiddenClass").css({
    "display": "block",
    "position": "relative"
  });
  $(".hiddenPartOfList").css({"display": "block"}).removeClass("hiddenPartOfList").addClass("notHiddenClass");
}


// Обработчик событий
$('#add').on("click", function(){
  set_message();
  addNum();
  addToList();
});

$('#display').on("click", function(){
  displayList();
});
