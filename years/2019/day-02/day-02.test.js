const { partOne, partTwo } = require('.')
const { commaSeparatedStringToNumArray } = require('../helpers')
const input = require('./input')

test('test for day 1 part 1', () => {
  const firstTestString = `1,0,0,0,99`
  const secondTestString = `2,3,0,3,99`
  const thirdTestString = `2,4,4,5,99,0`
  const forthTestString = `1,1,1,4,99,5,6,0,99`
  expect(partOne(commaSeparatedStringToNumArray(firstTestString))).toEqual([2, 0, 0, 0, 99])
  expect(partOne(commaSeparatedStringToNumArray(secondTestString))).toEqual([2, 3, 0, 6, 99])
  expect(partOne(commaSeparatedStringToNumArray(thirdTestString))).toEqual([2, 4, 4, 5, 99, 9801])
  expect(partOne(commaSeparatedStringToNumArray(forthTestString))).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99])
})

test('answer for day 1 part 1', () => {
  expect(partOne(commaSeparatedStringToNumArray(input))[0]).toEqual(4138658)
})

test('answer for day 1 part 2', () => {
  expect(partTwo(commaSeparatedStringToNumArray(input))).toEqual(7264)
})
