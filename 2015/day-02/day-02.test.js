const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `4x3x2
1x1x10`

  expect(partOne(testInput)).toBe(101)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(1598415)
})

test('part 2', () => {
  const testInput = `4x3x2
1x1x10`

  expect(partTwo(testInput)).toBe(48)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(3812909)
})
