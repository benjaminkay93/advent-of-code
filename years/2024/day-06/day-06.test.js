const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`

  expect(partOne(testInput)).toBe(41)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(5177)
})

test.skip('part 2', () => {
  const testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`

  expect(partTwo(testInput)).toBe(6)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
