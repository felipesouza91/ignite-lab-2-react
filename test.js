const descendingOrder = (num) => {
  const numToString = num.toString();
  var listNumer = [];
  for (var i = 0; i < numToString.length; i++) {
    listNumer.push(numToString.charAt(i));
  }

  return Number.parseInt(listNumer.sort((a, b) => b - a).join(''));
};

console.log(descendingOrder(21445));
