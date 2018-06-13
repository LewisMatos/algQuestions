function decodeString(encodedString) {
  let numberStack = [];
  let charStack = [];
  let decodeStack = [];

  let counter = 0;

  let currentStr = '';
  let buildStr = '';

  for (let char of encodedString) {
    if (!isNaN(Number(char))) {
      char = Number(char);
    }
    switch (typeof char) {
      case 'number':
        numberStack.push(char);
        break;
      case 'string':
        if (char === '[') {
          if (currentStr) charStack.push(currentStr);
          currentStr = '';
          counter++;
        } else if (char === ']') {
          let numberCount = numberStack.pop();
          let count = 0;
          while (count < numberCount) {
            buildStr += currentStr;
            count++;
          }
          decodeStack.push(buildStr);
          currentStr = charStack[charStack.length - 1] + buildStr;
          charStack.pop();
          buildStr = '';
          counter--;
          break;
        } else if (counter > 0) {
          currentStr += char;
        }
        break;
      default:
        break;
    }
  }
  return decodeStack.pop();
}

decodeString('2[b3[a]]');

module.exports = decodeString;

//2[b3[a]]

//numberStack [2] 3, 2

//charStack [b] b

// currentStr a

//decodeStack[aaa,baaabaaa ] baaabaaa
