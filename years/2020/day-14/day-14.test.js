const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`

  expect(partOne(testInput)).toBe(165)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(10885823581193)
})

test('part 2', () => {
  const testInput = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`

  expect(partTwo(testInput)).toBe(208)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(3816594901962)
})
