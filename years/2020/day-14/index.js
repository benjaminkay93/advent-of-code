const convertToBinaryString = number => number.toString(2).padStart(36, 0)

const applyMask = ({ value, mask }) => {
  const result = []

  for (let i = 0; i < mask.length; i++) {
    result[i] = mask[i] === 'X' ? value[i] : mask[i]
  }

  return result.join('')
}
const partOne = (input) => {
  let mask = null
  const memory = {}

  input.split('\n').forEach(command => {
    if (command.includes('mask = ')) {
      const [, newMask] = command.split('mask = ')
      mask = newMask
      return
    }

    const [, address, decimalValue] = /mem\[(\d+)\] = (\d*)/.exec(command)
    const value = convertToBinaryString(parseInt(decimalValue, 10))
    const result = applyMask({ value, mask })
    memory[address] = result
  })

  return Object.values(memory).reduce((count, val) => count + parseInt(val, 2), 0)
}

const getAddressesToWriteToo = ({ address, mask }) => {
  const tempResult = []

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '1') tempResult[i] = 1
    else if (mask[i] === 'X') tempResult[i] = 'X'
    else tempResult[i] = address[i]
  }

  const result = tempResult.join('')

  const floaters = result.split('X')

  return floaters.reduce((acc, float) => {
    if (acc.length === 0) return [float]
    const ones = [...acc].map(x => x + '0' + float)
    const zeroes = [...acc].map(x => x + '1' + float)
    return [...ones, ...zeroes]
  }, [])
}

const partTwo = (input) => {
  let mask = null
  const memory = {}

  input.split('\n').forEach(command => {
    if (command.includes('mask = ')) {
      const [, newMask] = command.split('mask = ')
      mask = newMask
      return
    }

    const [, decimalAddress, decimalValue] = /mem\[(\d+)\] = (\d*)/.exec(command)
    const address = convertToBinaryString(parseInt(decimalAddress, 10))
    getAddressesToWriteToo({ address, mask }).forEach((val) => {
      memory[val] = decimalValue
    })
  })

  return Object.values(memory).reduce((count, val) => count + parseInt(val, 10), 0)
}

module.exports = { partOne, partTwo }
