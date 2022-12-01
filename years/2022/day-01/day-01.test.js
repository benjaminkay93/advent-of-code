const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

  expect(partOne(testInput)).toBe(24000)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(72240)
})

test('part 2', () => {
  const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

  expect(partTwo(testInput)).toBe(45000)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe()
})
