export function reverseString(word) {
  if (typeof word !== 'string') {
    throw new Error("The param 'word' must be a string")
  }

  return word.split('').reverse().join('')
}
