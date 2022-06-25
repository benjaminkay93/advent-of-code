const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

  expect(partOne(testInput)).toBe(1588)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(2375)
})

test('part 2', () => {
  const testInput = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

  expect(partTwo(testInput)).toBe(2188189693529)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1976896901756)
})
