const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `939
7,13,x,x,59,x,31,19`

  expect(partOne(testInput)).toBe(295)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(296)
})

test('part 2', () => {
  const testInput = ``

  expect(partTwo(testInput)).toBe()
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
