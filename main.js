document.write("In CalmIsland" + "</br>");

var x = 0;
var y = 0;
do {
  let X = x.toString(); //0,1,2,10
  let Y = y.toString(); //0,1,2,10

  var arrX = X.split("").map(function (item) {
    let sum = 0;
    return (sum = sum + parseInt(item));
  });

  var arrY = Y.split("").map(function (item) {
    let sum = 0;
    return (sum = sum + parseInt(item));
  });

  var totalY = 0,
    totalX = 0;

  arrY.forEach(function (item) {
    totalY = totalY + item;
  });

  arrX.forEach(function (item) {
    totalX = totalX + item;
  });

  // document.write(y + "</br>");

  if (totalX + totalY == 23) {
    document.write(y + "</br>");
    break;
  }
  y++;
} while (totalX + totalY <= 23); //0+1+2
