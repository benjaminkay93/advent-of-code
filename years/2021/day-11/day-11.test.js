const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1a', () => {
  const testInput = `11111
19991
19191
19991
11111`

  expect(partOne(testInput, 1)).toBe(9)
})

test('part 1b', () => {
  const testInput = `11111
19991
19191
19991
11111`

  expect(partOne(testInput, 2)).toBe(9)
})

test('part 1', () => {
  const testInput = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`

  expect(partOne(testInput)).toBe(1656)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(1747)
})

test('part 2', () => {
  const testInput = ``

  expect(partTwo(testInput)).toBe()
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
