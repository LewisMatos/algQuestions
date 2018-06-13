const sortedStrings = require('./sortedStrings');

test('sortedStrings is a function', () => {
  expect(typeof sortedStrings).toEqual('function');
});

test('SortedString sorts a string', () => {
  expect(sortedStrings('weather', 'therapyw')).toEqual('theeraw');
});

test('SortedString sorts a string', () => {
  expect(sortedStrings('good', 'odg')).toEqual('oodg');
});
