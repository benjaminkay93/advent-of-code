const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`

  expect(partOne(testInput)).toBe(17)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(753)
})

test('part 2', () => {
  const testInput = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`

  expect(partTwo(testInput)).toBe(`#####
#...#
#...#
#...#
#####`)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(`#..#.####.#....####.#..#...##.###..#..#
#..#....#.#....#....#..#....#.#..#.#.#.
####...#..#....###..####....#.#..#.##..
#..#..#...#....#....#..#....#.###..#.#.
#..#.#....#....#....#..#.#..#.#.#..#.#.
#..#.####.####.####.#..#..##..#..#.#..#`)
})
