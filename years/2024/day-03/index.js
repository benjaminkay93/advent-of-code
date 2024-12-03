const regex = /mul\((\d*,\d*)\)/gis

const partOne = (input) => {
  const result = input.match(regex)
  return result.map(r => {
    const [first, second] = r.replace('mul(', '').replace(')', '').split(',')
    return first * second
  }).reduce((acc, n) => acc + n, 0)
}

const partTwoRegex = /mul\((\d*,\d*)\)|don't\(\)|do\(\)/gis
const partTwo = (input) => {
  let doNotProcess = false
  const result = input.match(partTwoRegex).filter(r => {
    if (r === "do()") {
      doNotProcess = false
      return false
    }
    if (r === "don't()") {
      doNotProcess = true
      return false
    }
    return !doNotProcess
  }).map(r => {
    const [first, second] = r.replace('mul(', '').replace(')', '').split(',')
    return first * second
  }).reduce((acc, n) => acc + n, 0)

  return result
}

module.exports = { partOne, partTwo }
