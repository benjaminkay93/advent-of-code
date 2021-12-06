const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

  expect(partOne(testInput)).toBe(5)
})

test('part 1 invertedY', () => {
  const testInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,4 -> 7,0
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

  expect(partOne(testInput)).toBe(5)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(5145)
})

test('part 2', () => {
  const testInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

  expect(partTwo(testInput)).toBe(12)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(16518)
})
