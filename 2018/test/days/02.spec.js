import fs from 'fs-extra'
import solution from '../../src/days/02'
import helper from '../helper'

fs.readFileSync = jest.fn()

describe('solution.partOne', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 12', () => {
    const input = helper.transformToInput('abcdef, bababc, abbcde, abcccd, aabcdd, abcdee, ababab')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(12)
  })
})

describe('solution.partTwo', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal fgij', () => {
    const input = helper.transformToInput('abcde, fghij, klmno, pqrst, fguij, axcye, wvxyz')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual('fgij')
  })
})
