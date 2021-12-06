const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `3,4,3,1,2`

  expect(partOne(testInput)).toBe(5934)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(385391)
})

test('part 2', () => {
  const testInput = ``

  expect(partTwo(testInput)).toBe()
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
