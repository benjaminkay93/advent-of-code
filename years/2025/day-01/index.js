const directionParser = (line) => {
  if (line.charAt(0) === 'L') {
    return -Number(line.slice(1))
  }
  return Number(line.slice(1))
}

const getWrappedValue = (value) => {
  if (value < 0) return getWrappedValue(value + 100)
  if (value >= 100) return getWrappedValue(value - 100)
  return value
}
const partOne = (input) => {
  let count = 0
  input.split('\n').reduce((acc, line) => {
    const value = directionParser(line)
    const newValue = acc + value

    const wrapedValue = getWrappedValue(newValue)
    if (wrapedValue === 0) {
      count++
    }
    return wrapedValue
  }, 50)
  return count
}

const partTwo = (input) => {
  let count = 0

  const getWrappedValuePartTwo = (value) => {
    if (value === 0) {
      count++
      return 0
    }
    if (value === 100) {
      count++
      return 0
    }
    if (value < 0) {
      count++
      return getWrappedValuePartTwo(value + 100)
    }
    if (value >= 100) {
      count++
      return getWrappedValuePartTwo(value - 100)
    }
    return value
  }

  input.split('\n').reduce((acc, line) => {
    const value = directionParser(line)
    const newValue = acc + value

    const wrapedValue = getWrappedValuePartTwo(newValue)
    return wrapedValue
  }, 50)
  return count
}

module.exports = { partOne, partTwo }
