//////////
// 1 способ
var x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
minEl = x[0][0];
for(var i = 0; i < 3; i++){
  for(var j = 0; j < 3; j++){
    var currentValue = x[i][j];
      if(currentValue < minEl)
        minEl = currentValue;
    }
  }
alert(minEl);
console.log(minEl);

// 2 способ
// var x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
// console.log("Minimum element = " + Math.min(...x.reduce((res, cur) => res.concat(cur))));
// alert("Minimum element = " + Math.min(...x.reduce((res, cur) => res.concat(cur))));
//////////
