document.write("<h2>" + "CalmIsland Robot Solution" + "</h2>");

document.write("<h3>" + "Calculate area for first quadrant" + "</h3>");

//First Quadrant
//Start from origin(X=0, Y=0)
var x = 0;
var y = 0;

//area is initialized with 0
var area = 0;

do {
  let X = x.toString();
  let Y = y.toString();

  //Convert all digits in a numer to array e.g. X = 599 to [5,9,9]
  var arrX = X.split("").map(item => parseInt(item));

  //Similarly for Y
  var arrY = Y.split("").map(item => parseInt(item));

  var totalY = 0, totalX = 0;

  //Add every element on arrX
  arrX.forEach(function (item) {
    totalX = totalX + item;
  });

  //Add every element on arrY
  arrY.forEach(function (item) {
    totalY = totalY + item;
  });

  //Check for dangerous points
  if (totalX + totalY === 23) {
    area = area + y;
    document.write(`(x: ${x} , y: ${y})</br>`);

    //Stop on x-axis and break the loop for first quadrant
    if (y === 0 && totalX + totalY === 23) {
      break;
    }

    x++;
    y = 0;
    continue;
  }

  y++;
} while (totalX + totalY <= 23);

document.write("</br>" + "Area in First Quadrant:" + area + "</br>");

var totalArea = 4 * area;

document.write("Total area in all 4 Quadrants:" + totalArea + "</br>");

document.write("The area in which robot can move:" + totalArea + "</br>");
