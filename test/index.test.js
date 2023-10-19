const getPercent = require('./Index');

test('percentage of the number', () => {
  expect(getPercent(25, 100)).toBe(30);
});