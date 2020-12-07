import fs from 'fs-extra'
import solution from '../../src/days/01'
import helper from '../helper'

fs.readFileSync = jest.fn()

describe('solution.partOne', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 3 when input is +1,+1,+1', () => {
    const input = helper.transformToInput('+1, +1, +1')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(3)
  })
  it('should equal 0 when input is +1, +1, -2', () => {
    const input = helper.transformToInput('+1, +1, -2')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(0)
  })
  it('should equal -6 when input is -1, -2, -3', () => {
    const input = helper.transformToInput('-1, -2, -3')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(-6)
  })
})

describe('solution.partTwo', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 0 when input is +1, -1', () => {
    const input = helper.transformToInput('+1, -1')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(0)
  })
  it('should equal 10 when input is +3, +3, +4, -2, -4', () => {
    const input = helper.transformToInput('+3, +3, +4, -2, -4')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(10)
  })
  it('should equal 5 when input is -6, +3, +8, +5, -6', () => {
    const input = helper.transformToInput('-6, +3, +8, +5, -6')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(5)
  })
  it('should equal 14 when input is +7, +7, -2, -7, -4', () => {
    const input = helper.transformToInput('+7, +7, -2, -7, -4')
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(14)
  })
})
