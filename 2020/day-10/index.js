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

const partTwo = (input) => {
  const parsedInput = `${input}\n0`.split('\n').map(num => Number(num)).sort((a, b) => a - b)

  const splitArray = parsedInput.reduce((acc, val, index) => {
    if (acc === '') return `,${val}`
    if (parsedInput[index + 1] - val === 3) return `${acc},${val}\n`
    return `${acc},${val}`
  }, '').split('\n')

  return splitArray.map(val => {
    return val.split(',').filter(val => val)
  })
  
  // .filter(val => val > 1).reverse().reduce((acc, val) => {
  //   if (!acc) return val
  //   return acc ** val
  // })
}

module.exports = { partOne, partTwo }
