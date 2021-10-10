const { partOne, partTwo } = require('.')
const { input } = require('./input')

test('part 1', () => {
  const testInput = `(())`

  expect(partOne(testInput)).toBe(0)
})

test('part 1', () => {
  const testInput = `()()`

  expect(partOne(testInput)).toBe(0)
})

test('part 1', () => {
  const testInput = `(((`

  expect(partOne(testInput)).toBe(3)
})

test('part 1', () => {
  const testInput = '(()(()('

  expect(partOne(testInput)).toBe(3)
})

test('part 1', () => {
  const testInput = `))(((((`

  expect(partOne(testInput)).toBe(3)
})

test('part 1', () => {
  const testInput = `())`

  expect(partOne(testInput)).toBe(-1)
})

test('part 1', () => {
  const testInput = `))(`

  expect(partOne(testInput)).toBe(-1)
})

test('part 1', () => {
  const testInput = `)))`

  expect(partOne(testInput)).toBe(-3)
})

test('part 1', () => {
  const testInput = `)())())`

  expect(partOne(testInput)).toBe(-3)
})

test('part 1 actual', () => {
  expect(partOne(input)).toBe(232)
})

test('part 2', () => {
  const testInput = `)`

  expect(partTwo(testInput)).toBe(1)
})

test('part 2', () => {
  const testInput = `()())`

  expect(partTwo(testInput)).toBe(5)
})

test('part 2 actual', () => {
  expect(partTwo(input)).toBe(1783)
})
