const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

  expect(partOne(testInput)).toBe(142)
})
test('part 1 - number only at end', () => {
  const testInput = `abc2`

  expect(partOne(testInput)).toBe(22)
})

test('part 1 - number only at start', () => {
  const testInput = `2abc`

  expect(partOne(testInput)).toBe(22)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(55130)
})

test('part 2 - simple', () => {
  const testInput = `eightwothree`

  expect(partTwo(testInput)).toBe(83)
})
test('part 2 - simple just last', () => {
  const testInput = `abc2`

  expect(partTwo(testInput)).toBe(22)
})
test('part 2 - simple just first', () => {
  const testInput = `2abc`

  expect(partTwo(testInput)).toBe(22)
})

test('part 2 - simple overlapping discounts', () => {
  const testInput = `abcone2threeightxyz`

  expect(partTwo(testInput)).toBe(18)
})

test('part 2', () => {
  const testInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

  expect(partTwo(testInput)).toBe(281)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(54985)
})
