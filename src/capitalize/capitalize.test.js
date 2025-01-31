import { capitalize } from './capitalize.js'

describe('capitalize()', () => {
  test('returns a string with the first letter capitalized', () => {
    expect(capitalize('hello World!')).toBe('Hello World!')
    expect(capitalize('javaScript')).toBe('JavaScript')
    expect(capitalize('testing')).toBe('Testing')
    expect(capitalize('capitalize function')).toBe('Capitalize function')
    expect(capitalize('unit test')).toBe('Unit test')
  })
  test('throws an error if the input is not a string', () => {
    const errorMsg = /^The param 'word' must be a string$/
    expect(() => capitalize(1)).toThrow(errorMsg)
    expect(() => capitalize({})).toThrow(errorMsg)
    expect(() => capitalize([])).toThrow(errorMsg)
  })
  test('handles string whose first char is not a letter', () => {
    expect(capitalize('1hola')).toBe('1hola')
    expect(capitalize('#hola')).toBe('#hola')
    expect(capitalize('.hola')).toBe('.hola')
  })
  test('capitalize the word even if the first char is a whitespace', () => {
    expect(capitalize(' whitespace')).toBe('Whitespace')
  })
})
