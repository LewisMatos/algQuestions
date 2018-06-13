function sortByStrings(s, t) {
  let sortedString = '';
  let charOccurrence = {};

  for (const char of s) {
    if (charOccurrence[char]) {
      charOccurrence[char] += char;
    } else {
      charOccurrence[char] = char;
    }
  }

  for (const char of t) {
    if (charOccurrence[char]) {
      sortedString += charOccurrence[char];
    }
  }

  // console.log(charOccurrence)

  return sortedString;
}

sortByStrings('weather', 'therapyw');

module.exports = sortByStrings;
