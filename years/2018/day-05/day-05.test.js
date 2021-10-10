const { partOne, partTwo } = require('.')
const { input } = require('./input')

const partOneTests = [
  [0, 'aA'],
  [0, 'Aa'],
  [0, 'abBA'],
  [1, 'cCc'],
  [10, 'dabAcCaCBAcCcaDA']
]

test.each(partOneTests)('part 1', (answer, input) => {
  expect(partOne(input)).toBe(answer)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(11252)
})

test('part 2', () => {
  const testInput = `dabAcCaCBAcCcaDA`

  expect(partTwo(testInput)).toBe(4)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(6118)
})
