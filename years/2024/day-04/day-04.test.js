const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

  expect(partOne(testInput)).toBe(18)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(2545)
})

test('part 2', () => {
  const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

  expect(partTwo(testInput)).toBe(9)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1886)
})
