const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

  expect(partOne(testInput, 3, 1)).toBe(7)
})

test('part 1 actual', () => {
  expect(partOne(input, 3, 1)).toBe(195)
})

test('part 2', () => {
  const testInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

  expect(partTwo(testInput)).toBe(336)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(3772314000)
})
