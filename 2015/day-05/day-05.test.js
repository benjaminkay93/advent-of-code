const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`

  expect(partOne(testInput)).toBe(2)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(255)
})

test('part 2', () => {
  const testInput = `qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`

  expect(partTwo(testInput)).toBe(2)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(55)
})
