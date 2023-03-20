function calculator(str) {
  let symbolOperations = ['+', '-', '*', '/'];
  const classicNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  if (str === undefined) {
    throw new Error('Input must be a string');
  }

  const expression = str.split(' ');
  [leftNum, symbolOperations, RightNum] = expression;




  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (expression.length !== 3) {
    throw new Error('Invalid input format');
  }

  if (classicNumbers.includes(leftNum) && romanNumbers.includes(RightNum)) {
    throw new Error('Different numeral systems are not supported');
  }


  if (romanNumbers.includes(leftNum) && classicNumbers.includes(RightNum)) {
    throw new Error('Different numeral systems are not supported');
  }




  if (classicNumbers.includes(leftNum) && classicNumbers.includes(RightNum)) {
    leftNum = Number(leftNum);
    RightNum = Number(RightNum);


    let result;
    switch (symbolOperations) {
      case '+':
        result = leftNum + RightNum;
        break;
      case '-':
        result = leftNum - RightNum;
        break;
      case '*':
        result = leftNum * RightNum;
        break;
      case '/':
        if (RightNum === 0) {
          return 'Division by zero';
        }
        result = Math.floor(leftNum / RightNum);
    }
    return result.toString();
  }

  if (romanNumbers.includes(leftNum) && romanNumbers.includes(RightNum)) {
    function romanToArabic(roman) {
      const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
      };

      let arabic = 0;
      let i = 0;

      while (i < roman.length) {
        const current = romanNumbers[roman[i]];
        const next = romanNumbers[roman[i + 1]];

        if (current < next) {
          arabic += next - current;
          i += 2;
        } else {
          arabic += current;
          i += 1;
        }
      }

      return arabic;
    }

    function arabicToRoman(arabic) {
      const romanNumbers = {
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };

      let roman = '';

      for (const key in romanNumbers) {
        const value = romanNumbers[key];
        const count = Math.floor(arabic / value);

        if (count > 0) {
          roman += key.repeat(count);
          arabic -= value * count;
        }
      }

      return roman;
    }

    leftNum = romanToArabic(leftNum);
    RightNum = romanToArabic(RightNum);

    let result;
    switch (symbolOperations) {
      case '+':
        result = leftNum + RightNum;
        break;
      case '-':
        result = leftNum - RightNum;
        break;
      case '*':
        result = leftNum * RightNum;
        break;
      case '/':
        if (RightNum === 0) {
          return 'Division by zero';
        }
        result = Math.floor(leftNum / RightNum);
    }
    return arabicToRoman(result);
  }
  else {
    throw new Error('Invalid input format');
  }
}


