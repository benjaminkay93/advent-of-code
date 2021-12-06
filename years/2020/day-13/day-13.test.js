const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `939
7,13,x,x,59,x,31,19`

  expect(partOne(testInput)).toBe(295)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(296)
})

test('part 2 simple', () => {
  const testInput = `1
67,7,59,61`

  expect(partTwo(testInput)).toBe(754018)
})

test('part 2 simple with x', () => {
  const testInput = `1
67,x,7,59,61`

  expect(partTwo(testInput)).toBe(779210)
})

test('part 2 simple with x in different place', () => {
  const testInput = `1
67,7,x,59,61`

  expect(partTwo(testInput)).toBe(1261476)
})

test('part 2 large', () => {
  const testInput = `1
1789,37,47,1889`

  expect(partTwo(testInput)).toBe(1202161486)
})

test('part 2 complex', () => {
  const testInput = `939
7,13,x,x,59,x,31,19`

  expect(partTwo(testInput)).toBe(1068781)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(535296695251210)
})
