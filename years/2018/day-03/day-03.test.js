const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

  expect(partOne(testInput)).toBe(4)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(112418)
})

test('part 2', () => {
  const testInput = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

  expect(partTwo(testInput)).toBe(3)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(560)
})
