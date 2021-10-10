const partOne = (input) => {
  const parsedInput = input.split('\n').map(num => parseInt(num, 10))

  return parsedInput.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
}

const partTwo = (input) => {
  const parsedInput = input.split('\n').map(num => parseInt(num, 10))
  const inputLength = parsedInput.length

  let currentValue = 0
  const valuesSeen = {}
  let index = 0

  while (!valuesSeen[currentValue]) {
    valuesSeen[currentValue] = true
    currentValue = currentValue + parsedInput[index]
    index++
    if (index === inputLength) index = 0
  }

  return currentValue
}

module.exports = { partOne, partTwo }
