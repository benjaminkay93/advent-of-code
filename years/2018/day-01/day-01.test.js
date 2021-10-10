const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `+1
  +1
  +1`

  expect(partOne(testInput)).toBe(3)
})

test('part 1, test 2', () => {
  const testInput = `+1
  +1
  -2`

  expect(partOne(testInput)).toBe(0)
})

test('part 1, test 3', () => {
  const testInput = `-1
  -2
  -3`

  expect(partOne(testInput)).toBe(-6)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(569)
})

const partTwoTestCases = [
  [0, `+1
  -1`],
  [10, `+3
  +3
  +4
  -2
  -4`],
  [5, `-6
  +3
  +8
  +5
  -6`],
  [14, `+7
  +7
  -2
  -7
  -4`,
  ],
]

test.each(partTwoTestCases)('part 2', (answer, input) => {
  expect(partTwo(input)).toBe(answer)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(77666)
})
