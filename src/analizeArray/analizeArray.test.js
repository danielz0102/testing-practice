import { analizeArray } from './analizeArray.js'

describe('analizeArray()', () => {
  test('returns an object', () => {
    expect(typeof analizeArray([1, 8, 3, 4, 2, 6])).toBe('object')
  })
  test('returns the average of the numbers', () => {
    expect(analizeArray([1, 8, 3, 4, 2, 6]).average).toBe(4)
    expect(analizeArray([1, 2, 3, 4, 5]).average).toBe(3)
    expect(analizeArray([10, 20, 30, 40, 50]).average).toBe(30)
  })
  test('returns the shortest value', () => {
    expect(analizeArray([1, 8, 3, 4, 2, 6]).min).toBe(1)
    expect(analizeArray([1, 2, 3, 4, 5]).min).toBe(1)
    expect(analizeArray([10, 20, 30, 40, 50]).min).toBe(10)
  })
  test('returns the maximum value', () => {
    expect(analizeArray([1, 8, 3, 4, 2, 6]).max).toBe(8)
    expect(analizeArray([1, 2, 3, 4, 5]).max).toBe(5)
    expect(analizeArray([10, 20, 30, 40, 50]).max).toBe(50)
  })
  test('returns the length of the array', () => {
    expect(analizeArray([1, 8, 3, 4, 2, 6]).length).toBe(6)
    expect(analizeArray([1, 2, 3, 4, 5]).length).toBe(5)
    expect(analizeArray([10, 20, 30, 40, 50]).length).toBe(5)
  })
})
