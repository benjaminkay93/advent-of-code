const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`

  expect(partOne(testInput)).toBe(820)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(926)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(657)
})
