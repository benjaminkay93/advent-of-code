import fs from 'fs-extra'
import solution from '../../src/days/04'
import helper from '../helper'

fs.readFileSync = jest.fn()

describe('solution.partOne', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 240', () => {
    const rawInput = '[1518-11-01 00:00] Guard #10 begins shift, [1518-11-01 00:05] falls asleep, [1518-11-01 00:25] wakes up, [1518-11-01 00:30] falls asleep, [1518-11-01 00:55] wakes up, [1518-11-01 23:58] Guard #99 begins shift, [1518-11-02 00:40] falls asleep, [1518-11-02 00:50] wakes up, [1518-11-03 00:05] Guard #10 begins shift, [1518-11-03 00:24] falls asleep, [1518-11-03 00:29] wakes up, [1518-11-04 00:02] Guard #99 begins shift, [1518-11-04 00:36] falls asleep, [1518-11-04 00:46] wakes up, [1518-11-05 00:03] Guard #99 begins shift, [1518-11-05 00:45] falls asleep, [1518-11-05 00:55] wakes up'
    const input = helper.transformToInput(rawInput)
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partOne()).toEqual(240)
  })
})

describe('solution.partTwo', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 4455', () => {
    const rawInput = '[1518-11-01 00:00] Guard #10 begins shift, [1518-11-01 00:05] falls asleep, [1518-11-01 00:25] wakes up, [1518-11-01 00:30] falls asleep, [1518-11-01 00:55] wakes up, [1518-11-01 23:58] Guard #99 begins shift, [1518-11-02 00:40] falls asleep, [1518-11-02 00:50] wakes up, [1518-11-03 00:05] Guard #10 begins shift, [1518-11-03 00:24] falls asleep, [1518-11-03 00:29] wakes up, [1518-11-04 00:02] Guard #99 begins shift, [1518-11-04 00:36] falls asleep, [1518-11-04 00:46] wakes up, [1518-11-05 00:03] Guard #99 begins shift, [1518-11-05 00:45] falls asleep, [1518-11-05 00:55] wakes up'
    const input = helper.transformToInput(rawInput)
    fs.readFileSync.mockReturnValueOnce(input)
    expect(solution.partTwo()).toEqual(4455)
  })
})
