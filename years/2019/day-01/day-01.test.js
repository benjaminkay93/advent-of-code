const { partOne, partTwo } = require('.')
const { stringToArray } = require('../helpers')
const input = require('./input')

const testString = `12
14
1969
100756`

test('test for day 1 part 1', () => {
  expect(partOne(stringToArray(testString))).toBe(34241)
})

test('answer for day 1 part 1', () => {
  expect(partOne(stringToArray(input))).toBe(3301059)
})

test('test for day 1 part 2', () => {
  expect(partTwo(stringToArray(testString))).toBe(51316)
})

test('answer for day 1 part 2', () => {
  expect(partTwo(stringToArray(input))).toBe(4948732)
})
