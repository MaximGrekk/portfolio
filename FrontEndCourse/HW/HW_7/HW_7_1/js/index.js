
//////////
let result = 0;
for(let i = 0; i <= 1000; i++){
  if(i % 3 == 0 || i % 5 == 0)
    result += i;
}

alert("Ответ на задачу 1: " + result + " (решение в файле index.js)")
console.log("Ответ: " + result);
//////////
