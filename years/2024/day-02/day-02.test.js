const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

  expect(partOne(testInput)).toBe(2)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(359)
})

test('part 2', () => {
  const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

  expect(partTwo(testInput)).toBe(4)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(418)
})
