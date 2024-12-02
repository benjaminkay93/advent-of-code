const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`

  expect(partOne(testInput)).toBe(11)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(1258579)
})

test('part 2', () => {
  const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`

  expect(partTwo(testInput)).toBe(31)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(23981443)
})
