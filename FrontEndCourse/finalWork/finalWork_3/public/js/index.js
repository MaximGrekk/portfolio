// кнопка для появления меню
var i = 0;

$('.buttonMenu').click(function() {
    i++;
    if (i == 1) {
      document.getElementById("mySidenav").style.width = "26.5%";
      document.querySelector(".main").style.marginLeft = "26.5%";
    } else {
      document.getElementById("mySidenav").style.width = "0";
      document.querySelector(".main").style.marginLeft= "0";
        i = 0;
    }
});
