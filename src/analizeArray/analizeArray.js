export function analizeArray(arr) {
  const length = arr.length
  const sum = arr.reduce((total, n) => total + n)
  const average = sum / length
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return {
    average,
    min,
    max,
    length,
  }
}
