const partOne = (input) => {
  const parsedInput = input.split('\n').map(item => {
    const multiples = item.split('x')
    const sizes = [
      multiples[0] * multiples[1],
      multiples[0] * multiples[2],
      multiples[1] * multiples[2],
    ].sort((a, b) => a - b)
    // return sizes

    return 2 * sizes[0] + 2 * sizes[1] + 2 * sizes[2] + sizes[0]
  })

  return parsedInput.reduce((acc, val) => {
    return acc + val
  }, 0)
}

const partTwo = (input) => {
  const parsedInput = input.split('\n').map(item => {
    const multiples = item.split('x').sort((a, b) => a - b)
    const length = 2 * multiples[0] + 2 * multiples[1]
    // return sizes

    return length + multiples[0] * multiples[1] * multiples[2]
  })

  return parsedInput.reduce((acc, val) => {
    return acc + val
  }, 0)
}

module.exports = { partOne, partTwo }
