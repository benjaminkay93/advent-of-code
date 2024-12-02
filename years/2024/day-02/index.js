const testRow = (row) => {
  const increasing = row[0] < row[1]
  if (increasing) {
    return row.reduce((acc, num, i) => {
      if (acc) return acc
      if (i === row.length - 1) return acc
      // look ahead decreasing
      if (num > row[i + 1]) return true
      // look ahead is the same value
      if (num === row[i + 1]) return true
      // look ahead increasing by more than 3
      if ((row[i + 1] - num) > 3) return true
      return false
    }, false)
  }

  return row.reduce((acc, num, i) => {
    if (acc) return acc
    if (i === row.length - 1) return acc
    // look ahead decreasing
    if (num < row[i + 1]) return true
    // look ahead is the same value
    if (num === row[i + 1]) return true
    // look ahead increasing by more than 3
    if ((num - row[i + 1]) > 3) return true
    return false
  }, false)
}

const partOne = (input) => {
  const parsedInput = input.split('\n').map((rawRow) => {
    const row = rawRow.split(' ').map((num) => parseInt(num))
    return testRow(row)
  }).reduce((acc, val) => {
    if (val) return acc
    return acc + 1
  }, 0)
  return parsedInput
}
const testRowPartTwo = (row) => {
  const testCases = row.length
  let successes = 0
  for (let i = 0; i < testCases; i++) {
    const newRow = row.filter((num, j) => j !== i)
    const result = testRow(newRow)
    if (!result) successes += 1
  }
  return successes
}

const partTwo = (input) => {
  const parsedInput = input.split('\n').map((rawRow) => {
    const row = rawRow.split(' ').map((num) => parseInt(num))
    return testRowPartTwo(row)
  }).reduce((acc, val) => {
    if (val === 0) return acc
    return acc + 1
  }, 0)
  return parsedInput
}

module.exports = { partOne, partTwo }
