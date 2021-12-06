const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `F10
N3
F7
R90
F11`

  expect(partOne(testInput)).toBe(25)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(2270)
})

test('part 2', () => {
  const testInput = ``

  expect(partTwo(testInput)).toBe()
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
