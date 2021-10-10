const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `turn on 0,0 through 999,999`

  expect(partOne(testInput)).toBe(1000000)
})

test('part 1', () => {
  const testInput = `toggle 0,0 through 999,0`

  expect(partOne(testInput)).toBe(1000)
})

test('part 1', () => {
  const testInput = `turn off 499,499 through 500,500`

  expect(partOne(testInput)).toBe(0)
})

test('part 1 2 lines', () => {
  const testInput = `turn on 0,0 through 999,999
turn off 499,499 through 500,500`

  expect(partOne(testInput)).toBe(999996)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(418954)
})

test('part 2', () => {
  const testInput = ``

  expect(partTwo(testInput)).toBe()
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
