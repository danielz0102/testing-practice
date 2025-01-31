import { Calculator } from './calculator.js'

describe('All Calculator methods', () => {
  test('return a number', () => {
    expect(typeof Calculator.add(2, 2)).toBe('number')
    expect(typeof Calculator.subtract(2, 2)).toBe('number')
    expect(typeof Calculator.multiply(2, 2)).toBe('number')
    expect(typeof Calculator.divide(2, 2)).toBe('number')
  })
  test('throw an error if the params are not numbers', () => {
    const errorMsg = /^The params must be numbers$/

    expect(() => Calculator.add('2', '5')).toThrow(errorMsg)
    expect(() => Calculator.add({}, [1, 2])).toThrow(errorMsg)
    expect(() => Calculator.add({}, 2)).toThrow(errorMsg)
    expect(() => Calculator.subtract('2', '5')).toThrow(errorMsg)
    expect(() => Calculator.subtract({}, [1, 2])).toThrow(errorMsg)
    expect(() => Calculator.subtract({}, 2)).toThrow(errorMsg)
    expect(() => Calculator.multiply('2', '5')).toThrow(errorMsg)
    expect(() => Calculator.multiply({}, [1, 2])).toThrow(errorMsg)
    expect(() => Calculator.multiply({}, 2)).toThrow(errorMsg)
    expect(() => Calculator.divide('2', '5')).toThrow(errorMsg)
    expect(() => Calculator.divide({}, [1, 2])).toThrow(errorMsg)
    expect(() => Calculator.divide({}, 2)).toThrow(errorMsg)
  })
  test('work with big numbers', () => {
    expect(Calculator.add(150_500_325, 345_000)).toBe(150_845_325)
    expect(Calculator.subtract(1_000_000, 500_000)).toBe(500_000)
    expect(Calculator.multiply(1_000_000, 2_000_000)).toBe(2_000_000_000_000)
    expect(Calculator.divide(1_000_000, 2)).toBe(500_000)
  })
  test('work with negative numbers', () => {
    expect(Calculator.add(-135, 35)).toBe(-100)
    expect(Calculator.subtract(25, -5)).toBe(30)
    expect(Calculator.multiply(-5, 3)).toBe(-15)
    expect(Calculator.divide(-10, 2)).toBe(-5)
  })
  test('work with floating-point numbers', () => {
    expect(Calculator.add(1.5, 2.3)).toBeCloseTo(3.8)
    expect(Calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3)
    expect(Calculator.multiply(2.5, 4.2)).toBeCloseTo(10.5)
    expect(Calculator.divide(5.5, 2.2)).toBeCloseTo(2.5)
  })
})

describe('Calculator.add()', () => {
  test('returns the sum of two numbers', () => {
    expect(Calculator.add(5, 6)).toBe(11)
    expect(Calculator.add(120, 9)).toBe(129)
    expect(Calculator.add(34, 2)).toBe(36)
  })
})

describe('Calculator.subtract()', () => {
  test('returns the subtraction of two numbers', () => {
    expect(Calculator.subtract(5, 2)).toBe(3)
    expect(Calculator.subtract(125, 35)).toBe(90)
    expect(Calculator.subtract(25, 50)).toBe(-25)
  })
})

describe('Calculator.multiply()', () => {
  test('returns the product of two numbers', () => {
    expect(Calculator.multiply(3, 3)).toBe(9)
    expect(Calculator.multiply(50, 25)).toBe(1250)
    expect(Calculator.multiply(100, 2.5)).toBe(250)
  })
})

describe('Calculator.divide()', () => {
  test('returns the division of two numbers', () => {
    expect(Calculator.divide(10, 2)).toBe(5)
    expect(Calculator.divide(50, 5)).toBe(10)
    expect(Calculator.divide(100, 4)).toBe(25)
  })
  test('throws an error when dividing by zero', () => {
    expect(() => Calculator.divide(10, 0)).toThrow(/^Cannot divide by zero$/)
  })
})
