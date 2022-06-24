const segmentCount = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6,
}

const partOne = (input) => {
  const outputValues = input.split('\n').map(line => line.split(' | ')[1])
  return outputValues.reduce((acc, line) => {
    let countLine = 0;
    line.split(' ').forEach(output => {
      if (output.length === segmentCount[1]) countLine += 1
      if (output.length === segmentCount[4]) countLine += 1
      if (output.length === segmentCount[7]) countLine += 1
      if (output.length === segmentCount[8]) countLine += 1
    })
    return acc + countLine;
  }, 0)
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
