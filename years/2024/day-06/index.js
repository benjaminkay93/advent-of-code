const TRAVELING_UP = '^'
const TRAVELING_RIGHT = '>'
const TRAVELING_LEFT = '<'
const TRAVELING_DOWN = 'v'
const VISTIED = 'X'
const BLOCKED = '#'

const move = ({ position, dict, maxX, maxY }) => {
  const { x, y } = position
  let newX = x
  let newY = y
  const direction = `${dict[`${x},${y}`]}`
  let isNewOutOfBounds = false
  if (direction === TRAVELING_UP) {
    for (let i = y; i >= -1; i--) {
      if (i === -1) {
        isNewOutOfBounds = true
        break
      } else if (dict[`${x},${i}`] === BLOCKED) {
        dict[`${x},${i + 1}`] = TRAVELING_RIGHT
        newX = x
        newY = i + 1
        break
      } else {
        dict[`${x},${i}`] = VISTIED
      }
    }
  }
  if (direction === TRAVELING_DOWN) {
    for (let i = y; i <= maxY + 1; i++) {
      if (i === maxY + 1) {
        isNewOutOfBounds = true
        break
      } else if (dict[`${x},${i}`] === BLOCKED) {
        dict[`${x},${i - 1}`] = TRAVELING_LEFT
        newX = x
        newY = i - 1
        break
      } else {
        dict[`${x},${i}`] = VISTIED
      }
    }
  }
  if (direction === TRAVELING_LEFT) {
    for (let i = x; i >= -1; i--) {
      if (i === -1) {
        isNewOutOfBounds = true
        break
      } else if (dict[`${i},${y}`] === BLOCKED) {
        dict[`${i + 1},${y}`] = TRAVELING_UP
        newX = i + 1
        newY = y
        break
      } else {
        dict[`${i},${y}`] = VISTIED
      }
    }
  }
  if (direction === TRAVELING_RIGHT) {
    for (let i = x; i <= maxX + 1; i++) {
      if (i === maxX + 1) {
        isNewOutOfBounds = true
        break
      } else if (dict[`${i},${y}`] === BLOCKED) {
        dict[`${i - 1},${y}`] = TRAVELING_DOWN
        newX = i - 1
        newY = y
        break
      } else {
        dict[`${i},${y}`] = VISTIED
      }
    }
  }

  const isOutOfBounds = newX < 0 || newY < 0 || newX > maxX || newY >= maxY
  if (isOutOfBounds || isNewOutOfBounds) {
    return dict
  }

  return move({ dict, position: { x: newX, y: newY }, maxX, maxY })
}

// const reassembleGrid = (dict, maxY, maxX) => {
//   const grid = []
//   for (let y = 0; y <= maxY; y++) {
//     const row = []
//     for (let x = 0; x <= maxX; x++) {
//       row.push(dict[`${x},${y}`])
//     }
//     const printRow = row.join('')
//     grid.push(printRow)
//   }
//   const printGrid = grid.join('\n')

//   console.log(printGrid)
// }

const partOne = (input) => {
  const dict = {}
  const staringPosition = {}
  let maxY = 0
  let maxX = 0
  input.split('\n').map((line, y) => line.split('').forEach((char, x) => {
    dict[`${x},${y}`] = char
    if (char === TRAVELING_UP || char === TRAVELING_DOWN || char === TRAVELING_LEFT || char === TRAVELING_RIGHT) {
      staringPosition.x = x
      staringPosition.y = y
    }
    maxY = y
    maxX = x
  }))

  const grid = move({ dict, position: staringPosition, maxX, maxY })
  // reassembleGrid(grid, maxY, maxX)
  return Object.values(grid).reduce((acc, value) => {
    if (value === VISTIED) {
      return acc + 1
    }
    return acc
  }, 0)
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
