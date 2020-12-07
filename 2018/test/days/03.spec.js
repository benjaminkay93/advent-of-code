import fs from 'fs-extra'
import solution from '../../src/days/03'
import helper from '../helper'

fs.readFileSync = jest.fn()

describe('solution.partOne', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 4', () => {
    const input = helper.transformToInput('#1 @ 1,3: 4x4, #2 @ 3,1: 4x4, #3 @ 5,5: 2x2')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(4)
  })
})

describe('solution.partTwo', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 3', () => {
    const input = helper.transformToInput('#1 @ 1,3: 4x4, #2 @ 3,1: 4x4, #3 @ 5,5: 2x2')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(3)
  })
})
