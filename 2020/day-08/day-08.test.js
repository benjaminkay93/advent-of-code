const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

  expect(partOne(testInput)).toBe(5)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(1610)
})

test('part 2', () => {
  const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

  expect(partTwo(testInput)).toBe(8)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1703)
})
