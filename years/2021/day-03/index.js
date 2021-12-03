const partOne = (input) => {
  const counts = {}

  const parsedInput = input.split('\n').map(val => {
    const ints = val.split('').map((character, index) => {
      if(!counts[index]) {
        counts[index] = {
          positive: 0,
          negative: 0
        }
      }
      if(character === "1") {
        counts[index] = {
          ...counts[index],
          positive: counts[index].positive + 1,
        }
      }

      if(character === "0") {
        counts[index] = {
          ...counts[index],
          negative: counts[index].negative + 1,
        }
      }
    })
    return ints
  })

  const gamma = Object.values(counts).reduce((acc, val) => {
    const result = val.negative < val.positive ? '1' : '0';
    return `${acc}${result}`
  }, '')

  const epsilon = gamma.split('').reduce((acc, val) => {
    if (val === '1') return `${acc}0`
    if (val === '0') return `${acc}1`
  }, '')

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
