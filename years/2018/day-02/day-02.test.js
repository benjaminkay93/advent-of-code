const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`

  expect(partOne(testInput)).toBe(12)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(6200)
})

test('part 2', () => {
  const testInput = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`

  expect(partTwo(testInput)).toBe('fgij')
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe('xpysnnkqrbuhefmcajodplyzw')
})
