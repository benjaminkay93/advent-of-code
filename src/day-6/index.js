const intersection = (...args) => {
  const result = []
  let lists

  if (args.length === 1) {
    return args[0]
  } else {
    lists = args
  }

  for (let i = 0; i < lists.length; i++) {
    const currentList = lists[i]
    for (let y = 0; y < currentList.length; y++) {
      const currentValue = currentList[y]
      if (result.indexOf(currentValue) === -1) {
        if (lists.filter(obj => obj.indexOf(currentValue) === -1).length == 0) {
          result.push(currentValue)
        }
      }
    }
  }

  return result
}

const partOne = (input) => {
  return input.split('\n\n').map(group => {
    const prepGroup = group.replace(/\n/g, '').split('')
    const set = new Set()

    prepGroup.forEach(answer => set.add(answer))

    return set.size
  }).reduce((acc, val) => acc + val, 0)
}

const partTwo = (input) => {
  return input.split('\n\n').map(group => {
    const prepGroup = group.split('\n')

    const prepAnswers = prepGroup.map(answer => answer.split(''))

    const unibiquitousAnswers = intersection(...prepAnswers)
    return unibiquitousAnswers.length
  }).reduce((acc, val) => acc + val, 0)
}

module.exports = { partOne, partTwo }
