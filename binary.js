function toBinary(num) {

  var binary = [];

  while (num > 0) {
    binary.push(num % 2);
    num = Math.floor(num / 2);
  }

  return binary.reverse().join('');

}

console.log(toBinary(19));




