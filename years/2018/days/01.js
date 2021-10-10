const { getArrayInput } = require('./helpers')

const getIntegerArray = filename => {
  return getArrayInput(filename).map(item => parseInt(item, 10))
}

const partOne = () => {
  const input = getIntegerArray('01-input')
  return input.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
}

const partTwo = () => {
  const input = getIntegerArray('01-input')
  const inputLength = input.length

  let currentValue = 0
  const valuesSeen = {}
  let index = 0

  while (!valuesSeen[currentValue]) {
    valuesSeen[currentValue] = true
    currentValue = currentValue + input[index]
    index++
    if (index === inputLength) index = 0
  }

  return currentValue
}

module.exports = {
  partOne,
  partTwo
}
