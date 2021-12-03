const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

  expect(partOne(testInput)).toBe(150)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(1868935)
})

test('part 2', () => {
  const testInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

  expect(partTwo(testInput)).toBe(900)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1965970888)
})
