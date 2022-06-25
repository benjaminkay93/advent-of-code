const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1a', () => {
  const testInput = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`

  expect(partOne(testInput)).toBe(10)
})

test('part 1b', () => {
  const testInput = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`

  expect(partOne(testInput)).toBe(19)
})

test('part 1c', () => {
  const testInput = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`

  expect(partOne(testInput)).toBe(226)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(3576)
})


test('part 2a', () => {
  const testInput = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`

  expect(partTwo(testInput)).toBe(36)
})

test('part 2b', () => {
  const testInput = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`

  expect(partTwo(testInput)).toBe(103)
})

test('part 2c', () => {
  const testInput = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`

  expect(partTwo(testInput)).toBe(3509)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(84271)
})
