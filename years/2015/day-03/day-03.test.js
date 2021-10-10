const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `>`

  expect(partOne(testInput)).toBe(2)
})

test('part 1', () => {
  const testInput = `^>v<`

  expect(partOne(testInput)).toBe(4)
})

test('part 1', () => {
  const testInput = `^v^v^v^v^v`

  expect(partOne(testInput)).toBe(2)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(2565)
})

test('part 2', () => {
  const testInput = `^v`

  expect(partTwo(testInput)).toBe(3)
})

test('part 2', () => {
  const testInput = `^>v<`

  expect(partTwo(testInput)).toBe(3)
})

test('part 2', () => {
  const testInput = `^v^v^v^v^v`

  expect(partTwo(testInput)).toBe(11)
})

test('part 2', () => {
  const testInput = `^^<<v<<v>`

  expect(partTwo(testInput)).toBe(6)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(2639)
})
