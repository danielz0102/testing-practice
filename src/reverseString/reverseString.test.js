import { reverseString } from './reverseString.js'

describe('reverseString()', () => {
  test('get a word and returns it reversed', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('world')).toBe('dlrow')
    expect(reverseString('JavaScript')).toBe('tpircSavaJ')
    expect(reverseString('reverse')).toBe('esrever')
    expect(reverseString('madam')).toBe('madam')
    expect(reverseString('racecar')).toBe('racecar')
    expect(reverseString('level')).toBe('level')
  })
  test('works with numbers and special chars', () => {
    expect(reverseString('!2  #5')).toBe('5#  2!')
  })
  test('throws an error if the input is not a string', () => {
    expect(() => reverseString(12345)).toThrow(
      /^The param 'word' must be a string$/,
    )
  })
})
