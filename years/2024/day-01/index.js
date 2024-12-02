const partOne = (input) => {
  const parsedInput = input.split('\n').reduce((acc, line) => {
    const [left, right] = line.split('   ')
    return {
      left: [...acc.left, parseInt(left)],
      right: [...acc.right, parseInt(right)],
    }
  }, { left: [], right: [] })

  const sortedLeft = parsedInput.left.sort((a, b) => a - b)
  const sortedRight = parsedInput.right.sort((a, b) => a - b)
  const diffArray = sortedLeft.map((left, index) => {
    if (sortedRight[index] > left) return sortedRight[index] - left
    return left - sortedRight[index]
  }).reduce((acc, val) => acc + val, 0)
  return diffArray
}

const partTwo = (input) => {
  const parsedInput = input.split('\n').reduce((acc, line) => {
    const [left, right] = line.split('   ')
    return {
      left: [...acc.left, parseInt(left)],
      right: [...acc.right, parseInt(right)],
    }
  }, { left: [], right: [] })
  const rightCount = parsedInput.right.reduce((acc, val) => {
    if (acc[val]) return { ...acc, [val]: acc[val] + 1 }
    return { ...acc, [val]: 1 }
  }, {})
  const leftCount = parsedInput.left.reduce((acc, val) => {
    if (rightCount[val]) return acc + (rightCount[val] * val)
    return acc
  }, 0)
  return leftCount
}

module.exports = { partOne, partTwo }
