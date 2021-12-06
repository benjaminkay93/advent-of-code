const getCounts = (input) => {
  const counts = {}

  input.forEach(val => {
    val.split('').forEach((character, index) => {
      if (!counts[index]) {
        counts[index] = {
          positive: 0,
          positiveValues: [],
          negative: 0,
          negativeValues: [],
        }
      }
      if (character === "1") {
        counts[index] = {
          ...counts[index],
          positive: counts[index].positive + 1,
          positiveValues: [...counts[index].positiveValues, val],
        }
      }

      if (character === "0") {
        counts[index] = {
          ...counts[index],
          negative: counts[index].negative + 1,
          negativeValues: [...counts[index].negativeValues, val],
        }
      }
    })
  })

  return counts
}

const partOne = (input) => {
  const parsedInput = input.split('\n')
  const counts = getCounts(parsedInput)

  const gamma = Object.values(counts).reduce((acc, val) => {
    const result = val.negative < val.positive ? '1' : '0'
    return `${acc}${result}`
  }, '')

  const epsilon = gamma.split('').reduce((acc, val) => {
    if (val === '1') return `${acc}0`
    if (val === '0') return `${acc}1`
    return acc
  }, '')

  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

const cycleIndexOxygen = (input, index) => {
  if (input.length === 1) {
    return input[0]
  }
  const counts = getCounts(input)

  if (counts[index].positive >= counts[index].negative) {
    return cycleIndexOxygen(counts[index].positiveValues, index + 1)
  }

  if (counts[index].negative > counts[index].positive) {
    return cycleIndexOxygen(counts[index].negativeValues, index + 1)
  }
}

const cycleIndexCO2 = (input, index) => {
  if (input.length === 1) {
    return input[0]
  }
  const counts = getCounts(input)

  if (counts[index].positive < counts[index].negative) {
    return cycleIndexCO2(counts[index].positiveValues, index + 1)
  }

  if (counts[index].negative <= counts[index].positive) {
    return cycleIndexCO2(counts[index].negativeValues, index + 1)
  }
}

const partTwo = (input) => {
  const parsedInput = input.split('\n')

  const oxygen = cycleIndexOxygen(parsedInput, 0)

  const co2 = cycleIndexCO2(parsedInput, 0)

  return parseInt(oxygen, 2) * parseInt(co2, 2)
}

module.exports = { partOne, partTwo }
