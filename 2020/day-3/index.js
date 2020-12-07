const TREE = '#'

const partOne = (input, x, y) => {
  const baseGrid = input.split('\n').map(line => line.split(''))

  let pointerX = 0
  let pointerY = 0
  let treesEncountered = 0

  while (pointerY < baseGrid.length) {
    if (baseGrid[pointerY][pointerX] === TREE) treesEncountered++
    pointerY = pointerY + y
    pointerX = pointerX + x
    if (baseGrid[0].length - 1 < pointerX) {
      pointerX = pointerX - baseGrid[0].length
    }
  }

  return treesEncountered
}

const tests = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
]

const partTwo = (input) => {
  const results = tests.map(test => partOne(input, ...test))
  return results.reduce((acc, val) => {
    return acc * val
  }, 1)
}

module.exports = { partOne, partTwo }
