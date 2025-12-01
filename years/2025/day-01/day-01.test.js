const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

  expect(partOne(testInput)).toBe(3)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(989)
})

test('part 2', () => {
  const testInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

  expect(partTwo(testInput)).toBe(6)
})

test('part 2 actual', () => {
  // 5949 too high
  expect(partTwo(input)).toBe()
})
