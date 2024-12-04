const partOne = (input) => {
  const dict = {}
  input.split('\n').forEach((line, lineIndex) => line.split('').forEach((char, charIndex) => {
    dict[`${charIndex},${lineIndex}`] = char
  }))

  let matchingCount = 0;

  Object.keys(dict).forEach((key) => {
    const [x, y] = key.split(',').map(val => parseInt(val, 10))

    if (dict[`${x},${y}`] !== 'X') return

    if (dict?.[`${x+1},${y}`] === 'M' && dict?.[`${x+2},${y}`] === 'A' && dict?.[`${x+3},${y}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x+1},${y+1}`] === 'M' && dict?.[`${x+2},${y+2}`] === 'A' && dict?.[`${x+3},${y+3}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x},${y+1}`] === 'M' && dict?.[`${x},${y+2}`] === 'A' && dict?.[`${x},${y+3}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x-1},${y+1}`] === 'M' && dict?.[`${x-2},${y+2}`] === 'A' && dict?.[`${x-3},${y+3}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x-1},${y}`] === 'M' && dict?.[`${x-2},${y}`] === 'A' && dict?.[`${x-3},${y}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x-1},${y-1}`] === 'M' && dict?.[`${x-2},${y-2}`] === 'A' && dict?.[`${x-3},${y-3}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x},${y-1}`] === 'M' && dict?.[`${x},${y-2}`] === 'A' && dict?.[`${x},${y-3}`] === 'S') {
      matchingCount = matchingCount + 1
    }
    if (dict?.[`${x+1},${y-1}`] === 'M' && dict?.[`${x+2},${y-2}`] === 'A' && dict?.[`${x+3},${y-3}`] === 'S') {
      matchingCount = matchingCount + 1
    }
  })

  return matchingCount
}

const partTwo = (input) => {

  const dict = {}
  input.split('\n').forEach((line, lineIndex) => line.split('').forEach((char, charIndex) => {
    dict[`${charIndex},${lineIndex}`] = char
  }))

  let matchingCount = 0;

  Object.keys(dict).forEach((key) => {
    const [x, y] = key.split(',').map(val => parseInt(val, 10))

    if (dict[`${x},${y}`] !== 'A') return

    if (dict?.[`${x+1},${y+1}`] === 'M' && dict?.[`${x-1},${y-1}`] === 'S' && dict?.[`${x+1},${y-1}`] === 'M' && dict?.[`${x-1},${y+1}`] === 'S') {
      matchingCount = matchingCount + 1
    }

    if (dict?.[`${x+1},${y+1}`] === 'S' && dict?.[`${x-1},${y-1}`] === 'M' && dict?.[`${x+1},${y-1}`] === 'M' && dict?.[`${x-1},${y+1}`] === 'S') {
      matchingCount = matchingCount + 1
    }

    if (dict?.[`${x+1},${y+1}`] === 'M' && dict?.[`${x-1},${y-1}`] === 'S' && dict?.[`${x+1},${y-1}`] === 'S' && dict?.[`${x-1},${y+1}`] === 'M') {
      matchingCount = matchingCount + 1
    }

    if (dict?.[`${x+1},${y+1}`] === 'S' && dict?.[`${x-1},${y-1}`] === 'M' && dict?.[`${x+1},${y-1}`] === 'S' && dict?.[`${x-1},${y+1}`] === 'M') {
      matchingCount = matchingCount + 1
    }
  })

  return matchingCount
}

module.exports = { partOne, partTwo }
