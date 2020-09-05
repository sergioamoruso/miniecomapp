describe('getDecimals should', () => {
  beforeEach(() => {
    sut = require('./getDecimals');
  });

  test('return correct result when there are two decimals', () => {
    const expected = 99;
    const result = sut(499.99);
    expect(result).toBe(expected);
  });

  test('return correct result when there is one decimal', () => {
    const expected = 9;
    const result = sut(499.9);
    expect(result).toBe(expected);
  });

  test('return null when there are no decimals', () => {
    const expected = null;
    const result = sut(499);
    expect(result).toBe(expected);
  });
});
