const CODES = {
  A: 'A'.charCodeAt(),
  Z: 'Z'.charCodeAt(),
  a: 'a'.charCodeAt(),
  z: 'z'.charCodeAt(),
}

export function caesarCipher(str, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26

  return [...str].reduce(
    (finalStr, char) => finalStr + shiftCharacter(char, normalizedShift),
    '',
  )
}

const isLetter = (charCode) =>
  (charCode >= CODES.A && charCode <= CODES.Z) ||
  (charCode >= CODES.a && charCode <= CODES.z)

const shiftCharacter = (char, shift) => {
  const code = char.charCodeAt()

  if (!isLetter(code)) return char

  const base = code <= CODES.Z ? CODES.A : CODES.a

  const relativePosition = code - base
  const newPosition = (relativePosition + shift) % 26

  return String.fromCharCode(base + newPosition)
}
