const { getArrayInput } = require('./helpers')

const GRID_OFFSET = 2

const parseIntoCoordinates = input => {
  return input.map(coordinate => {
    const xy = coordinate.split(', ')
    return {
      x: parseInt(xy[0], 10) + GRID_OFFSET,
      y: parseInt(xy[1], 10) + GRID_OFFSET,
    }
  })
}

const getUpperAndLowerBounds = (coordinates) => {
  const unOffsetedCoordinates = coordinates.reduce((accumulator, coordinate) => {
    if (coordinate.x > accumulator.x) accumulator.x = coordinate.x
    if (coordinate.y > accumulator.y) accumulator.y = coordinate.y
    return accumulator
  }, { x: 0, y: 0 })

  return {
    x: unOffsetedCoordinates.x + GRID_OFFSET,
    y: unOffsetedCoordinates.y + GRID_OFFSET,
  }
}

const seedInitialGrid = (bounds, coordinates) => {
  const emptyCell = {
    occupier: [],
    locked: false,
  }

  const emptyGrid = []
  for (let x = 0; x < bounds.x; ++x) {
    emptyGrid[x] = []
    for (let y = 0; y < bounds.y; ++y) {
      emptyGrid[x][y] = Object.create(emptyCell)
    }
  }

  coordinates.forEach((coordinate, index) => {
    emptyGrid[coordinate.x][coordinate.y].occupier = index + 1
    emptyGrid[coordinate.x][coordinate.y].locked = true
  })

  logGrid(bounds, emptyGrid)
  return emptyGrid
}

const logGrid = (bounds, grid) => {
  let stringToLog = ''
  for (let x = 0; x < bounds.x; ++x) {
    for (let y = 0; y < bounds.y; ++y) {
      if (grid[x][y].occupier >= 1) {
        stringToLog = `${stringToLog}${grid[x][y].occupier}`
      } else {
        stringToLog = `${stringToLog}.`
      }
    }
    stringToLog = `${stringToLog}\n`
  }
  console.log(stringToLog)
}

const partOne = () => {
  const input = getArrayInput('06-input')

  const coordinates = parseIntoCoordinates(input)
  const bounds = getUpperAndLowerBounds(coordinates)
  const intialGrid = seedInitialGrid(bounds, coordinates)

  return intialGrid
}

const partTwo = () => {
  const input = getArrayInput('06-input')

  return input
}

module.exports = {
  partOne,
  partTwo,
}
