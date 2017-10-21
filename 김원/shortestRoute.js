function findShortestRoute(n) {
  const row = +n.split(/[\s\n]/)[0];
  const column = +n.split(/[\s\n]/)[1];
  const str = n.split(/[\s\n]/)[2].split('').map(function (str) {
    return +str
  });
  const map = [];
  for (let i = 0; i < row; i++) {
    map[i] = str.slice(i * column, (i + 1) * column)
  }
  let step = 1;
  let departure = [0, 0];
  let arrival = [row - 1, column - 1];

  return [step, departure, arrival, map];
}

var test = '4 6\n101111101010101011111011';
var testMap = findShortestRoute(test);
console.log(findShortestRoute(test));
