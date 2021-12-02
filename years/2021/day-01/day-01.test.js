const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`

  expect(partOne(testInput)).toBe(7)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(1791)
})

test('part 2', () => {
  const testInput = `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`

  expect(partTwo(testInput)).toBe(5)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1822)
})
