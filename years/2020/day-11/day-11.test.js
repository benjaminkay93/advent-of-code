const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

  expect(partOne(testInput)).toBe(37)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(2152)
})

test.skip('part 2', () => {
  const testInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

  expect(partTwo(testInput)).toBe(26)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
