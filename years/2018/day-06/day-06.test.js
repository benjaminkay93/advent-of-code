const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`

  // expect(partOne(testInput)).toBe(17)
  expect(partOne(testInput)).toBe()
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe()
})

test('part 2', () => {
  const testInput = ``

  expect(partTwo(testInput)).toBe()
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
