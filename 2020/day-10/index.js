const partOne = (input) => {
  const parsedInput = `${input}\n0`.split('\n').map(num => Number(num)).sort((a, b) => a - b)

  const tracker = { 1: 0, 2: 0, 3: 0 }

  parsedInput.forEach((val, index) => {
    if (index === parsedInput.length - 1) {
      tracker['3'] += 1
      return
    }

    const diff = parsedInput[index + 1] - val
    tracker[diff] += 1
  })

  return tracker['1'] * tracker['3']
}

const precomputedHash = {
  '0': 1,
  '0,1': 1,
  '0,1,2': 2,
  '0,1,2,3': 4,
  '0,1,2,3,4': 7
}

const partTwo = (input) => {
  const parsedInput = `${input}\n0`.split('\n').map(num => Number(num)).sort((a, b) => a - b)

  const splitArray = parsedInput.reduce((acc, val, index) => {
    if (acc.inProgress === []) return { ...acc, inProgress: [val] }
    if (!parsedInput[index + 1] || parsedInput[index + 1] - val === 3) {
      return { completed: [...acc.completed, [...acc.inProgress, val]], inProgress: [] }
    }
    return { ...acc, inProgress: [...acc.inProgress, val] }
  }, { completed: [], inProgress: [] })

  const simplifiedArray = splitArray.completed.map(subArray => {
    const numberToReduceBy = subArray[0]
    return subArray.map((item) => (item - numberToReduceBy))
  })

  const calculateSubArrayValue = simplifiedArray.map(subArray => {
    const hashLookup = subArray.join(',')
    return precomputedHash[hashLookup]
  })

  return calculateSubArrayValue.reduce((acc, val) => acc * val, 1)
}

module.exports = { partOne, partTwo }
