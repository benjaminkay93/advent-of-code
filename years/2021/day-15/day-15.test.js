const { partOne, partTwo } = require('.')
const { input } = require('./input')

test.only('part 1', () => {
  const testInput = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`

  expect(partOne(testInput)).toBe(40)
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
