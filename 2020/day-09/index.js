const prepareArray = (rawInput, preamble) => {
  const numbersToCheck = rawInput.slice(preamble)
  return numbersToCheck.map((val, index) => {
    return {
      val,
      subArray: rawInput.slice(index, index + preamble)
    }
  })
}

const arrayOfAdditions = (array, escapeValue) => {
  const [valueToCheck, ...subArray] = array || []
  if (subArray.length === 0) return []
  const newArray = subArray.reduce((acc, val) => {
    return [...acc, val + valueToCheck]
  }, [])

  return [...newArray, ...arrayOfAdditions(subArray, escapeValue)]
}

const partOne = (input, preamble = 25) => {
  const parsedInput = input.split('\n').map(num => Number(num))
  const array = prepareArray(parsedInput, preamble)
  let done = false
  return array.map(value => {
    if (done) return true
    const allSums = arrayOfAdditions(value.subArray, value.val)
    if (allSums.includes(value.val)) {
      return true
    }
    done = true
    return value.val
  }).filter(value => typeof value === 'number')[0]
}

const partTwo = (input, preamble = 25) => {
  const parsedInput = input.split('\n').map(num => Number(num))
  const expectedResult = partOne(input, preamble)

  const arrayLocation = parsedInput.map((val, index) => {
    return parsedInput.slice(index).reduce((acc, subVal, subIndex) => {
      if (typeof acc === 'object') return acc
      if (typeof acc === 'string') return 'bust'
      if (acc > expectedResult) return 'bust'
      if (acc === expectedResult) return { index, subIndex }
      return acc + subVal
    }, 0)
  }).filter(val => typeof val === 'object')[0]

  const finalArray = parsedInput.slice(arrayLocation.index, arrayLocation.subIndex + arrayLocation.index)

  const sortedFinalArray = finalArray.sort((a, b) => a - b)
  const start = sortedFinalArray[0]
  const end = sortedFinalArray.reverse()[0]
  return start + end
}

module.exports = { partOne, partTwo }
