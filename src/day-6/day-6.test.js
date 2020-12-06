const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`

  expect(partOne(testInput)).toBe(11)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(6534)
})

test('part 2', () => {
  const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`
  expect(partTwo(testInput)).toBe(6)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(3402)
})
