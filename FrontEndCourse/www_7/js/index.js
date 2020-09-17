// 1 Подключение JS


// console.log("Hello, World!");


// 2 Переменные


// let myFirstVar;
// var mySecondVar = "Hello, World!";
// mySecondVar = "Hello!";
// myFirstVar = 'Hello 2!';
// myFirstVar = 34.56;
// myFirstVar = false;
// let num = 45;
// var nothing = null;
// // var obj = {}
// let number = 47;
// number = 45;
// const Number = 34;
// Number = 45; Ошибка. Нельзя переприсваивать значение константам

// console.log("Переменная: " + Number);


// 3 Операторы


// console.log(x + " " + y);

// res = x + y;
// console.log("Результат: " + res);
//
// res = x - y;
// console.log("Результат: " + res);
//
//
// res = x * y;
// console.log("Результат: " + res);
//
//
// res = x / y;
// console.log("Результат: " + res);
//
//
// res = x % y;
// console.log("Результат: " + res);
//
// res += 10;
// console.log("Результат: " + res);

// res++;
// console.log("Результат: " + res);

// res--;
// console.log("Результат: " + res);
//
// res = -res;
// console.log("Результат: " + res);

// res = y - res;
// console.log("Результат: " + res);

// res = y - ++res; // res = y - (res - 1);
// console.log("Результат: " + res);
//
//
// let str = "Hello, ";
// let str_2 = "World";
//
// console.log("Результат: " + (str + str_2));


// 4 Условия


// let x = 20;
// let y = 20;
//
// let hasCar = false;
//
// if(x > y){
//   console.log("Число X больше, чем число Y");
//   console.log("Проверка");
// } else if (x == y) {
//   console.log("Числа равны");
//
//   if (x != 24 || (!hasCar && y == 24))
//     console.log("Числа не равно 24");
//
// } else if (x == 20) {
//   console.log("Число X равно 20");
// } else if (x == 26) {
//   console.log("Число X равно 26");
// } else
//   console.log("Числа не равны");
//
//   let str = "Petr";
//   switch("Some-3"){
//     case "John":
//       console.log("Имя John");
//       break;
//     case "Bob":
//       console.log("Имя Bob");
//       break;
//     case "Max":
//       console.log("Имя Max");
//       break;
//     case "Petr":
//       console.log("Имя Petr");
//       break;
//     case "Alex":
//       console.log("Имя Alex");
//       break;
//     case "Some-1":
//     case "Some-2":
//     case "Some-3":
//     case "Some-4":
//       console.log("Имя Some");
//       break;
//     default:
//       console.log("Нам не известно имя");
//       break;
//   }
//
// let nums = 23;
// let res = "";
//
// if(nums > 25){
//   res = "big";
// } else
//   res = "small";
// console.log(res);
//
// let result = nums > 25 ? "big" : "small";
// console.log(result);


// 5 Массивы


// let array = [45, true, 6.92, "Hello ", 'R'];
// let str = array.join(", "); // из массива в строку
//
// console.log(str);
// console.log(array);
// array.splice(1, 1);
// console.log(array);
// array[1] = false;
// array[2] = "Hello";
// array[3] += "World!";
//
// array[array.length] = 5; // array[5] = 5;
// array.pop(); // удаляет последний  элемент
// array.push("Bob", "Alex", 1); // добавляет эл-ты в конец массива
// array.shift(); // удаляет 1 элемент
// array.unshift("Bob", "Alex", 1); // добавляет элементы в начало массива
// // array.length = 5; // удаляет остальные элементы после пятого
// delete array[2];
//
// console.log(array);
// // console.log(array.length);
//
// let arr = new Array(45, true, 6.92, "Hello ", 'R');
// console.log(arr);
//
// let matrix = [
//    [56, "Hello"],
//    [5],
//    [8.9, true, false, 56]
//  ];
//
// matrix[2][1] = "World";
// matrix[0][2] = 45;
// console.log(matrix[0][1]);
//
// str = "Hello, world, 5, 0, qwe";
// let array_Split = str.split(", ");
// console.log(array_Split); // Строку разбивает по определнным символам, создает массив


// 6 Циклы


// let arr = [5, 6, "Hello", 's', true, 9];
//
// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
//
// arr.forEach(function(item, i, array ){ // параметры: определенный эл-т в массиве, индекс, название массива
//   console.log( "Элемент под №" + i + ": " + item + ". Массив: " + array);
// });
//
// console.log(" ");
// console.log(" ");
//
// for(var key in arr){
//   console.log( "Элемент под №" + key + ": " + arr[key]);
// }
//
// for(var i = 0; i < arr.length; i++){
//   console.log("Элемент под №" + (i + 1) + ": " + arr[i]);
// }
//
// console.log(" ");
//
// var i = 0;
// while(i < arr.length){
//   console.log("Элемент под №" + (i + 1) + ": " + arr[i]);
//   i++
// }
//
// for(var i = 1; i < 20; i++){
//   if(i > 15)
//     break;
//   if(i % 2 ! = 0)
//     continue;
//   console.log(i);
// }
//
// let i = 1
// while(i < 100){
//   console.log(i);
//   i *= 2;
// }
//
// var i  = 100;
// do {
//   console.log(i);
//   i++;
// } while(i < 10)


// 7 Функции


// var i = 0;
// show();
//
// function show(){
//   var el = "Element"
//   console.log(el);
// }
//
// function print(){
//   var el = "Element"
//   console.log(el);
// }
//
// show();
//
//
// function calc(a = 12, b = 10){
//   // if(b == undefined)
//   //   b = 10;
//   var res = a + b;
//   console.log(res);
// }
//
//
//
// let func = function(mess) {
//   console.log("Привет: " + mess);
// };
//
// func("Alex");
//
// // let func = calc;
// // func(5, 10);
// // func = null;
// // calc();
// calc(56);
// calc(56, 14);
//
//
// function multiply(a, b, c){
//   var res = a * b * c;
//   return res;
// }
//
// let mult = multiply(5, 2, 2);
// console.log(mult);
//
// function arrayEven(array) {
//   let isEven = true;
//   array.forEach(function(item, i, arr){
//     if(item % 2 != 0){
//       isEven = false;
//       // break;
//     }
//   });
//   return isEven;
// }
//
// let arr = [5, 9, 0, 4];
// let arr_2 = [6, 8, 0, 4];
//
// let isEven = arrayEven(arr_2);
// console.log(isEven);
//
// function test(words){
//   console.log(words);
// }
//
// setTimeout(test, 1500, "Hello world");
// setTimeout("console.log('Hello')", 1500);
// let timeout = setTimeout(function(){
//   console.log('Hello')
// }, 1500);
//
// clearTimeout(timeout);
//
// // setInterva l(test, 2000, "set interval");
//
// let interval = setInterval(function(){
//   console.log('Hello');
// }, 2000);
//
// setTimeout(function(){
//   clearInterval(interval);
//   console.log("stop");
// }, 5000);

// 8 Взаимодействие с пользователем


// var numbers = 45;
// alert("Переменная: " + numbers);

// let getUserInfo = prompt("Сколько Вам лет?", 18);
// alert(getUserInfo);

// let isConfirm = confirm("Согласны ли Вы на обработку данных?");
// alert(isConfirm);


// 9 Объекты


// let car = {
//   marka: "volvo",
//   color: "White",
//   type: "sedan",
//   speed: 250,
//   fuel: 50,
//   isNew: true,
//   passengers: ["Alex", "Bob", "John"]
// };
// console.log(car["fuel"]);
//
// console.log("");
//
// for(let key in car){
//   console.log("Элемент по ключу: " + key + ": " + car[key]);
// }

// Object function
// console.log("");

// function Car(marka, color, type, speed){
//   this.marka = marka;
//   this.color = color;
//   this.type = type;
//   this.speed = speed;
// }

// Object class
// class Car {
//   constructor(marka, color, type, speed){
//     this.marka = marka;
//     this.color = color;
//     this.type = type;
//     this.speed = speed;
//   }
//   info(){
//     console.log("Марка " + this.marka + ", цвет " + this.color + ", тип " + this.type + ", скорость " + this.speed);
//   }
// }
//
// let bmw = new Car("M3", "blue", "sedan", 250);
// let volvo = new Car("Volvo", "white", "sedan", 230);
// bmw.color = "red";
// bmw.info();
// volvo.info();
// console.log(bmw.color);
// console.log(volvo.color);
// bmw.weigth = 1800;
// console.log(bmw.weigth);
// console.log(volvo.weigth);
//
// let arr = new Array();


// 10 JSON


let obj = '{"name": "Alex", "age": 45, "hasCar": true}';
obj = JSON.parse(obj); // from JSON to usal object
console.log(obj.name);

let array = '[56, 7, 2, 89]';
array = JSON.parse(array);
console.log(array);

let ob = '{ "name": "Alex", "state": "USA", "male": true, "friends": [0, 1, 2, 3] }';
ob = JSON.parse(ob);
console.log(ob.friends[1]);

var object = {
  name: "Maxim",
  "age": 19,
  "state": 'UA'
};

// обратное преобразование (из обычного в JSON)

 let str = JSON.stringify(object, ["name", "state"], 4); // 1 параметр - объект для трансформирования, 2 - ключ в объекте для трансформирования, 3 - кол-во отступов перед объектом на выводе
 console.log(str);











// end
