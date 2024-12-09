// Source: https://adventofcode.com/2024/day/7

const itterateTestBase2 = ({ target, numbers }) => {
  const rounds = numbers.length - 1
  const attempts = (2 ** rounds)
  const allResults = []

  for (let i = 0; i < attempts; i++) {
    const bits = i.toString(2).padStart(rounds, '0').split('')
    allResults.push(bits.reduce((acc, bit, index) => {
      if (bit === '0') {
        return acc + numbers[index + 1]
      }
      if (bit === '1') {
        return acc * numbers[index + 1]
      }
      return bit
    }, numbers[0]))
  }

  return allResults.includes(target)
}

const partOne = (input) => {
  const lines = input.split('\n').map((line) => {
    const [target, numRaw] = line.split(': ')
    const numbers = numRaw.split(' ').map((num) => parseInt(num))
    return {
      target: parseInt(target),
      numbers,
    }
  })
  return lines.filter(itterateTestBase2).reduce((acc, value) => acc + value.target, 0)
}

const itterateTestBase3 = ({ target, numbers }) => {
  const rounds = numbers.length - 1
  const attempts = (3 ** rounds)
  const allResults = []

  for (let i = 0; i < attempts; i++) {
    const bits = i.toString(3).padStart(rounds, '0').split('')
    allResults.push(bits.reduce((acc, bit, index) => {
      if (bit === '0') {
        return acc + numbers[index + 1]
      }
      if (bit === '1') {
        return acc * numbers[index + 1]
      }
      if (bit === '2') {
        return parseInt(`${acc}${numbers[index + 1]}`)
      }
      return bit
    }, numbers[0]))
  }

  return allResults.includes(target)
}

const partTwo = (input) => {
  const lines = input.split('\n').map((line) => {
    const [target, numRaw] = line.split(': ')
    const numbers = numRaw.split(' ').map((num) => parseInt(num))
    return {
      target: parseInt(target),
      numbers,
    }
  })
  return lines.filter(itterateTestBase3).reduce((acc, value) => acc + value.target, 0)}

module.exports = { partOne, partTwo }
