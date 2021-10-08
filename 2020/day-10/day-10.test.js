const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `16
  10
  15
  5
  1
  11
  7
  19
  6
  12
  4`

  expect(partOne(testInput)).toBe(35)
})

test('part 1 test two', () => {
  const testInput = `28
  33
  18
  42
  31
  14
  46
  20
  48
  47
  24
  23
  49
  45
  19
  38
  39
  11
  1
  32
  25
  35
  8
  17
  7
  9
  4
  2
  34
  10
  3`

  expect(partOne(testInput)).toBe(220)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(2210)
})

test('part 2', () => {
  const testInput = `16
  10
  15
  5
  1
  11
  7
  19
  6
  12
  4`

  expect(partTwo(testInput)).toBe(8)
})

test('part 2 test two', () => {
  const testInput = `28
  33
  18
  42
  31
  14
  46
  20
  48
  47
  24
  23
  49
  45
  19
  38
  39
  11
  1
  32
  25
  35
  8
  17
  7
  9
  4
  2
  34
  10
  3`

  expect(partTwo(testInput)).toBe(19208)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(7086739046912)
})
