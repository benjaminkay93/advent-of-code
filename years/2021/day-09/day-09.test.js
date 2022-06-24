const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `2199943210
3987894921
9856789892
8767896789
9899965678`

  expect(partOne(testInput)).toBe(15)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(580)
})

test('part 2', () => {
  const testInput = `2199943210
3987894921
9856789892
8767896789
9899965678`

  expect(partTwo(testInput)).toBe(1134)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(856716)
})
