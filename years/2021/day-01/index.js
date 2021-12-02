const countIncreases = (array) => array.reduce((acc, val, index) => {
  if(index === 0) return 0
  if (array[index - 1] < val) return acc + 1
  return acc
}, 0)

const partOne = (input) => {
  const parsedInput = input.split('\n').map(val => parseInt(val, 10))
  return countIncreases(parsedInput)
}

const partTwo = (input) => {
  const parsedInput = input.split('\n').map(val => parseInt(val, 10))
  const groups = parsedInput.map((val, index) => {
    if (index >= parsedInput.length -2) return 0
    return val + parsedInput[index + 1] + parsedInput[index + 2]
  })
  return countIncreases(groups)
}

module.exports = { partOne, partTwo }
