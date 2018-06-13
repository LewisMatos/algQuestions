const change = require('./changePossibilities');

test('change is a function', () => {
  expect(typeof change).toEqual('function');
});

test('change returns permutations of amount and coin denominations', () => {
  expect(change(4, [1, 2, 3])).toEqual(4);
});

test('change returns permutations of amount and coin denominations', () => {
  expect(change(5, [1, 2, 3, 4, 5])).toEqual(7);
});
