import { getPercent } from './Index'
import { getMonth } from './Index'
import { getNumber } from './Index'

describe('percentage of the number', () => {
  it('true', () => expect(getPercent(25, 100)).toBe(25));
  it('false', () => expect(getPercent(25, 100)).toBe(30));
  it('calculation 0%', () => expect(getPercent(0, 100)).toBe(25));
});
describe('withdrawal of months', () => {
  it('withdrawal of months январь', () => expect(getMonth(1)).toBe('январь'));
  it('withdrawal of months февраль', () => expect(getMonth(2)).toBe('январь'));
  it('withdrawal of months no', () => expect(getMonth(0)).toBe('январь'));
});
describe('Get a number', () => {
  it('Get a number 123', () => expect(getNumber("123")).toBe(123));
  it('Get a number 12', () => expect(getNumber('21')).toBe(12));
  it('Get a number no', () => expect(getNumber('undefined')).toBe(123));
});