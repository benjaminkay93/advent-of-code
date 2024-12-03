const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`

  expect(partOne(testInput)).toBe(161)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(159892596)
})

test('part 2', () => {
  const testInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

  expect(partTwo(testInput)).toBe(48)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
