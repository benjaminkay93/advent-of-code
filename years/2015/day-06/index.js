const parseInput = input => input.split('\n').map(line => {
  if (line.includes('turn on')) {
    return {
      type: 'on',
      area: line.replace('turn on ', '').split(' through ').map(xy => xy.split(',')),
    }
  }
  if (line.includes('turn off')) {
    return {
      type: 'off',
      area: line.replace('turn off ', '').split(' through ').map(xy => xy.split(',')),
    }
  }
  if (line.includes('toggle')) {
    const area = line.replace('toggle ', '').split(' through ').map(xy => xy.split(','))
    return {
      type: 'toggle',
      area,
    }
  }
  return undefined
})

const partOne = (input) => {
  const parsedInput = parseInput(input)

  const grid = new Set()

  const functions = {
    on: (coordinates) => grid.add(coordinates),
    off: (coordinates) => grid.delete(coordinates),
    toggle: (coordinates) => grid.has(coordinates) ? grid.delete(coordinates) : grid.add(coordinates),
  }

  parsedInput.forEach(({ type, area: [[startX, startY], [endX, endY]] }) => {
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        functions[type](`${x},${y}`)
      }
    }
  })

  return grid.size
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
