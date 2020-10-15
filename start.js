document.write("<h1>" + "CalmIsland Robot Solution" + "</h1>" + "</br>");

var x = 0;
var y = 0;
var area = 0;
do {
  let X = x.toString();
  let Y = y.toString();

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

  if (totalX + totalY == 23) {
    area = area + y;
    document.write("x:" + x + " , " + "y:" + y + "</br>");

    if (y == 0 && totalX + totalY == 23) {
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
