export const Calculator = {
  add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('The params must be numbers')
    }

    return x + y
  },

  subtract(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('The params must be numbers')
    }

    return x - y
  },

  multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('The params must be numbers')
    }

    return x * y
  },

  divide(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('The params must be numbers')
    }

    if (y === 0) {
      throw new Error('Cannot divide by zero')
    }

    return x / y
  },
}
