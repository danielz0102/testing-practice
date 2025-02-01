import { caesarCipher } from './caesarCipher.js'

describe('caesarCipher()', () => {
  test('shifts characters by the given number', () => {
    expect(caesarCipher('jkl', 1)).toBe('klm')
    expect(caesarCipher('fgh', 5)).toBe('klm')
    expect(caesarCipher('abc', 5)).toBe('fgh')
  })
  test('works with negative shift factors', () => {
    expect(caesarCipher('klm', -1)).toBe('jkl')
    expect(caesarCipher('klm', -5)).toBe('fgh')
    expect(caesarCipher('fgh', -5)).toBe('abc')
  })
  test('wraps chars from z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a')
    expect(caesarCipher('a', -1)).toBe('z')
    expect(caesarCipher('xyz', 3)).toBe('abc')
  })
  test('maintains lettercase', () => {
    expect(caesarCipher('AbC', 1)).toBe('BcD')
    expect(caesarCipher('XyZ', 2)).toBe('ZaB')
    expect(caesarCipher('MnO', -1)).toBe('LmN')
  })
  test('maintains punctuation chars', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    expect(caesarCipher('What a day!', 5)).toBe('Bmfy f ifd!')
    expect(caesarCipher('Testing, 1, 2, 3!', 7)).toBe('Alzapun, 1, 2, 3!')
  })
})
