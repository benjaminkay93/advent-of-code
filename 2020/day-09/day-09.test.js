const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

  expect(partOne(testInput, 5)).toBe(127)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(22406676)
})

test('part 2', () => {
  const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

  expect(partTwo(testInput, 5)).toBe(62)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(2942387)
})
