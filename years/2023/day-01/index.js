const decimalMatcher = /\d/
const partOne = (input) => {
  const count = input.split('\n').map(code => {
    const firstLastNumber = code.split('').reduce((acc, val, index) => {
      if (!decimalMatcher.test(val)) {
        if (index === code.length - 1 && !acc.last) {
          return { ...acc, last: acc.first }
        }
        return acc
      }
      if (!acc.first && index === code.length - 1) return { first: val, last: val }
      if (!acc.first) return { first: val, last: null }
      return { first: acc.first, last: val }
    }, { first: null, last: null })
    return Number(`${firstLastNumber.first}${firstLastNumber.last}`)
  }).reduce((acc, val) => {
    return acc + val
  }, 0)
  return count
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
