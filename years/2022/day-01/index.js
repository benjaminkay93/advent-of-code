const partOne = (input) => {
  const totalCaloryCount = input.split('\n\n').map(elf => {
    return elf.split('\n').reduce((acc, val) => {
      return parseInt(val, 10) + acc
    }, 0)
  })

  const sortedCount = totalCaloryCount.sort((a, b) => b - a)
  return sortedCount[0]
}

const partTwo = (input) => {
  const totalCaloryCount = input.split('\n\n').map(elf => {
    return elf.split('\n').reduce((acc, val) => {
      return parseInt(val, 10) + acc
    }, 0)
  })

  const sortedCount = totalCaloryCount.sort((a, b) => b - a)
  return sortedCount[0] + sortedCount[1] + sortedCount[2]
}

module.exports = { partOne, partTwo }
