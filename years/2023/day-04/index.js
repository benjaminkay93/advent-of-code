const partOne = (input) => {
  const parsedInput = input.split('\n').map((line) => {
    const [, rawNumbers] = line.split(': ')
    const [numbers, toMatch] = rawNumbers.split(' | ').map((n) => n.split(' ').map(Number))

    const count = numbers.reduce((acc, n) => {
      const match = toMatch.find((m) => m === n)
      if (match) {
        return acc + 1
      }
      return acc
    }, 0)

    if (!count) {
      return 0
    }

    return (2 ** (count - 1))
  })
  return parsedInput.reduce((acc, n) => acc + n, 0)
}

const partTwo = (input) => {
  const valuesArray = []
  input.split('\n').forEach((line) => {
    const [card, rawNumbers] = line.split(': ')
    const [numbers, toMatch] = rawNumbers.split(' | ').map((n) => n.split(' ').map(Number))

    const matches = numbers.reduce((acc, n) => {
      const match = toMatch.find((m) => m === n)
      if (match) {
        return acc + 1
      }
      return acc
    }, 0)

    valuesArray.push({ matches, instance: 1, card: card.replace('Card ', '') })
  })

  return valuesArray.reduce((acc, { matches, instance }, index) => {
    for (let i = 1; i < matches + 1; i++) {
      if (acc[index + i]) {
        acc[index + i].instance = acc[index + i].instance + instance
      }
    }
    return acc
  }, valuesArray).reduce((acc, { instance }) => acc + instance, 0)
}

module.exports = { partOne, partTwo }

// 1 1 2^0
// 2 2 2^1
// 3 4 2^2
// 4 8 2^3
// 5 16 2^4
// 6 32
// 7 64
