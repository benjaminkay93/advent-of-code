import fs from 'fs-extra'
import solution from '../../src/days/06'
import helper from '../helper'

fs.readFileSync = jest.fn()

describe('solution.partOne', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 17', () => {
    const input = '1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9'
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(17)
  })
})

describe.skip('solution.partTwo', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 4', () => {
    const input = helper.transformToInput('#1 @ 1,3: 4x4, #2 @ 3,1: 4x4, #3 @ 5,5: 2x2')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(4)
  })
})
