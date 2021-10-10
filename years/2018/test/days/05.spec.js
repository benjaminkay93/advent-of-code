const fs = require('fs-extra')
const solution = require('../../days/05')

fs.readFileSync = jest.fn()

describe('solution.partOne', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  const returnsZero = [
    'aA',
    'Aa',
    'abBA'
  ]
  it.each(returnsZero)('should equal 0 when passed %s', (value) => {
    fs.readFileSync.mockReturnValueOnce(value)
    expect(solution.partOne()).toEqual(0)
  })
  it('should equal 1 when passed cCc', () => {
    fs.readFileSync.mockReturnValueOnce('cCc')
    expect(solution.partOne()).toEqual(1)
  })
  it('should equal 10', () => {
    fs.readFileSync.mockReturnValueOnce('dabAcCaCBAcCcaDA')
    expect(solution.partOne()).toEqual(10)
  })
})

describe('solution.partTwo', () => {
  beforeEach(() => {
    fs.readFileSync.mockClear()
  })
  it('should equal 4', () => {
    fs.readFileSync.mockReturnValueOnce('dabAcCaCBAcCcaDA')
    expect(solution.partTwo()).toEqual(4)
  })
})
