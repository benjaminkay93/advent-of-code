const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

  expect(partOne(testInput)).toBe(198)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(3959450)
})

test('part 2', () => {
  const testInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

  expect(partTwo(testInput)).toBe(230)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(7440311)
})
