const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('calculator basic operations', () => {
  test('2 + 3 => 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 => 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 => 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 => 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('handles floats', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });

  // Extended operations
  test('5 % 2 => 1 (modulo)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('2 ^ 3 => 8 (power)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('sqrt 16 => 4 (squareRoot)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of negative throws', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of negative number');
  });
});
