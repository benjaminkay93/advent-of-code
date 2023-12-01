const numberMap = {
  1: 1,
  one: 1,
  2: 2,
  two: 2,
  3: 3,
  three: 3,
  4: 4,
  four: 4,
  5: 5,
  five: 5,
  6: 6,
  six: 6,
  7: 7,
  seven: 7,
  8: 8,
  eight: 8,
  9: 9,
  nine: 9,
  0: 0,
  zero: 0,
}

const partOneMatcher = /(\d)/g
const partTwoMatcher = /(\d|one|two|three|four|five|six|seven|eight|nine|zero)/g

const partOne = (input) => {
  const count = input.split('\n').map((code, index) => {
    const parseCode = code.match(partOneMatcher)
    const firstNumber = numberMap[parseCode[0]]
    const lastNumber = numberMap[parseCode[parseCode.length - 1]]
    return Number(`${firstNumber}${lastNumber}`)
  }).reduce((acc, val) => {
    return acc + val
  }, 0)
  return count
}

const partTwo = (input) => {
  const count = input.split('\n').map((code, index) => {
    const parseCode = code.match(partTwoMatcher)
    const firstNumber = numberMap[parseCode[0]]
    const lastNumber = numberMap[parseCode[parseCode.length - 1]]
    return Number(`${firstNumber}${lastNumber}`)
  }).reduce((acc, val) => {
    return acc + val
  }, 0)
  return count
}

module.exports = { partOne, partTwo }
