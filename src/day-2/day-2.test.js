const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`

  expect(partOne(testInput)).toBe(2)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(454)
})

test('part 2', () => {
  const testInput = `1-3 a: abcde
  1-3 b: cdefg
  2-9 c: ccccccccc`

  expect(partTwo(testInput)).toBe(1)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(649)
})
