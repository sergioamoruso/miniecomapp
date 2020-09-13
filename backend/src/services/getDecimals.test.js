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
    const expected = 90;
    const result = sut(499.9);
    expect(result).toBe(expected);
  });

  test('return 0 when there are no decimals', () => {
    const expected = 0;
    const result = sut(499);
    expect(result).toBe(expected);
  });
});
