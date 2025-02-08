import {sum} from '../src/utils/commonFunctions';

test('sum of 3 and 6 should be 9', () => {
  expect(sum(3, 4)).toBe(7);
});
test('sum of both negative numbers', () => {
  expect(sum(-9, -9)).toBe(-18);
});
