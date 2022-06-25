const foldY = (grid, foldNumber) => {
  return grid.map(dot => {
    const [x, y] = dot.split(',').map(value => parseInt(value, 10))
    if (y < foldNumber) return dot;
    const newPosition = `${x},${foldNumber - (y - foldNumber)}`
    if(grid.includes(newPosition)) return null;
    return newPosition
  }).filter(dot => dot)
}

const foldX = (grid, foldNumber) => {
  return grid.map(dot => {
    const [x, y] = dot.split(',').map(value => parseInt(value, 10))
    if (x < foldNumber) return dot;
    const newPosition = `${foldNumber - (x - foldNumber)},${y}`
    if(grid.includes(newPosition)) return null;
    return newPosition
  }).filter(dot => dot)
}
const strategy = {
  x: foldX,
  y: foldY,
}

const partOne = (input) => {
  const [rawStart, rawInstructions ] = input.split('\n\n')
  let grid = rawStart.split('\n')
  const instructions = rawInstructions.split('\n').map(rawItem => rawItem.replace('fold along ','').split('='))
  const setToRun = [instructions[0]]
  setToRun.forEach(([direction, foldNumber]) => {
    grid = strategy[direction](grid, foldNumber)
  })

  return grid.length
}

const partTwo = (input) => {
  const [rawStart, rawInstructions ] = input.split('\n\n')
  let grid = rawStart.split('\n')
  const instructions = rawInstructions.split('\n').map(rawItem => rawItem.replace('fold along ','').split('='))

  instructions.forEach(([direction, foldNumber]) => {
    grid = strategy[direction](grid, foldNumber)
  })

  const [maxX, maxY] = grid.reduce(([xMax, yMax], val) => {
    const [x, y] = val.split(',').map(value => parseInt(value, 10))
    const newXMax = x > xMax ? x : xMax
    const newYMax = y > yMax ? y : yMax

    return [newXMax, newYMax]
  }, [0, 0])

  const display = []

  for(var y = 0; y <= maxY; y++) {
    if(!display?.[y]) display.push('')
    for(var x = 0; x<= maxX; x++) {
      const char = grid.includes(`${x},${y}`) ? '#' : '.'
      display[y] = display[y] + char
    }
  }

  return display.join('\n')
}

module.exports = { partOne, partTwo }
