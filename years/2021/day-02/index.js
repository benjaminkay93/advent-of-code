const partOne = (input) => {
  let horizontal = 0
  let depth = 0

  input.split('\n').forEach(val => {
    const [direction, movement] = val.split(' ')
    if (direction === 'forward') {
      horizontal = horizontal + parseInt(movement, 10)
    }
    if (direction === 'down') {
      depth = depth + parseInt(movement, 10)
    }
    if (direction === 'up') {
      depth = depth - parseInt(movement, 10)
    }
  })

  return horizontal * depth
}

const partTwo = (input) => {
  let horizontal = 0
  let depth = 0
  let aim = 0

  input.split('\n').forEach(val => {
    const [direction, movement] = val.split(' ')
    if (direction === 'forward') {
      horizontal = horizontal + parseInt(movement, 10)
      depth = depth + (aim * parseInt(movement, 10))
    }
    if (direction === 'down') {
      aim = aim + parseInt(movement, 10)
    }
    if (direction === 'up') {
      aim = aim - parseInt(movement, 10)
    }
  })

  return horizontal * depth
}

module.exports = { partOne, partTwo }
