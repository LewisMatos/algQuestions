const decodeStrings = require('./decodeString');

test('decodeStrings is a function', () => {
  expect(typeof decodeStrings).toEqual('function');
});

test('decodeString decodes a string', () => {
  expect(decodeStrings('4[ab]')).toEqual('abababab');
});

test('decodeString decodes a string', () => {
  expect(decodeStrings('2[b3[a]]')).toEqual('baaabaaa');
});
