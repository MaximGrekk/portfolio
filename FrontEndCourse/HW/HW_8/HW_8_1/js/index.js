
let number = 5;
let num = prompt("Введите число во всплывающее окно.");
console.log(num);
while(num != number){
  num = prompt("Пока Вы не введет число 5, я не закроюсь!");
  console.log(num);
  if(num == number)
    alert("Ура! Вы ввели число 5!!!");
}









// end
