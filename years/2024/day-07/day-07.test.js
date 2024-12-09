const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`

  expect(partOne(testInput)).toBe(3749)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(4122618559853)
})

test('part 2', () => {
  const testInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`

  expect(partTwo(testInput)).toBe(11387)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(227615740238334)
})
