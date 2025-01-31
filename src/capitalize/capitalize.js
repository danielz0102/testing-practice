export function capitalize(word) {
  if (typeof word !== 'string') {
    throw new Error("The param 'word' must be a string")
  }

  const wordFiltered = word.trim()

  return wordFiltered[0].toUpperCase() + wordFiltered.slice(1)
}
