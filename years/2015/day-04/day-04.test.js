const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `abcdef`

  expect(partOne(testInput)).toBe(609043)
})

test('part 1', () => {
  const testInput = `pqrstuv`

  expect(partOne(testInput)).toBe(1048970)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(254575)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1038736)
})
