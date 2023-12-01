const numberMap = {
  0: 0,
  zero: 0,
  orez: 0,
  1: 1,
  one: 1,
  eno: 1,
  2: 2,
  two: 2,
  owt: 2,
  3: 3,
  three: 3,
  eerht: 3,
  4: 4,
  four: 4,
  ruof: 4,
  5: 5,
  five: 5,
  evif: 5,
  6: 6,
  six: 6,
  xis: 6,
  7: 7,
  seven: 7,
  neves: 7,
  8: 8,
  eight: 8,
  thgie: 8,
  9: 9,
  nine: 9,
  enin: 9,
}

const partOneMatcher = /(\d)/g
const partTwotMatcher = /(\d|one|two|three|four|five|six|seven|eight|nine|zero)/g
const partTwoReversedMatcher = /(\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|orez)/g

const partOne = (input) => {
  const count = input.split('\n').map((code) => {
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
  const count = input.split('\n').map((code) => {
    const reversedCode = code.split('').reverse().join('')
    const first = code.match(partTwotMatcher)
    const last = reversedCode.match(partTwoReversedMatcher)
    const firstNumber = numberMap[first[0]]
    const lastNumber = numberMap[last[0]]
    return Number(`${firstNumber}${lastNumber}`)
  }).reduce((acc, val) => {
    return acc + val
  }, 0)
  return count
}

module.exports = { partOne, partTwo }
