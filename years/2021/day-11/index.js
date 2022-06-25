const humanReadable = grid => {
  let array = []
  Object.keys(grid).forEach(position => {
    const [x, y] = position.split(',').map(value => parseInt(value, 10))
    if (!array?.[x]) {
      array.push([grid[position]])
      return
    }
    array[x].push(grid[position])
  })

  return array.map(line => line.join('')).join('\n')
}

const partOne = (input, stepCount = 100) => {
  const grid = {}
  const flashed = []
  input.split('\n').forEach((line, xIndex) => line.split('').forEach((number, yIndex) => grid[`${xIndex},${yIndex}`] = parseInt(number, 10)))

  const step = () => {
    const visited = new Set()
    Object.keys(grid).forEach(position => {
      grid[position] += 1
    })
    
    const increment = position => {
      if (visited.has(position)) return
      if(grid[position] > 9) {
        visited.add(position)
        const [x, y] = position.split(',').map(value => parseInt(value, 10))
        const topLeft = `${x+1},${y+1}`
        const top = `${x},${y+1}`
        const topRight = `${x-1},${y+1}`
        const left = `${x-1},${y}`
        const right = `${x+1},${y}`
        const bottomLeft = `${x-1},${y-1}`
        const bottom = `${x},${y-1}`
        const bottomRight = `${x+1},${y-1}`
        
        guardAndIncrement(topLeft)
        guardAndIncrement(top)
        guardAndIncrement(topRight)
        guardAndIncrement(left)
        guardAndIncrement(right)
        guardAndIncrement(bottomLeft)
        guardAndIncrement(bottom)
        guardAndIncrement(bottomRight)
      }
    }

    const guardAndIncrement = (position) => {
      if(grid?.[position] && !visited.has(position)) {
        grid[position] += 1
        increment(position)
      }
    }

    Object.keys(grid).forEach(increment)
    
    Object.keys(grid).forEach(position => {
      if(grid[position] > 9) {
        flashed.push(position)
        grid[position] = 0
      }
    })
  }
  let i = 0
  while (i < stepCount) {
    step()
    i++;
  }
  return flashed.length
}

const partTwo = (input) => {
  const grid = {}
  let flashed = []
  input.split('\n').forEach((line, xIndex) => line.split('').forEach((number, yIndex) => grid[`${xIndex},${yIndex}`] = parseInt(number, 10)))

  const step = () => {
    flashed = []
    const visited = new Set()
    Object.keys(grid).forEach(position => {
      grid[position] += 1
    })
    
    const increment = position => {
      if (visited.has(position)) return
      if(grid[position] > 9) {
        visited.add(position)
        const [x, y] = position.split(',').map(value => parseInt(value, 10))
        const topLeft = `${x+1},${y+1}`
        const top = `${x},${y+1}`
        const topRight = `${x-1},${y+1}`
        const left = `${x-1},${y}`
        const right = `${x+1},${y}`
        const bottomLeft = `${x-1},${y-1}`
        const bottom = `${x},${y-1}`
        const bottomRight = `${x+1},${y-1}`
        
        guardAndIncrement(topLeft)
        guardAndIncrement(top)
        guardAndIncrement(topRight)
        guardAndIncrement(left)
        guardAndIncrement(right)
        guardAndIncrement(bottomLeft)
        guardAndIncrement(bottom)
        guardAndIncrement(bottomRight)
      }
    }

    const guardAndIncrement = (position) => {
      if(grid?.[position] && !visited.has(position)) {
        grid[position] += 1
        increment(position)
      }
    }

    Object.keys(grid).forEach(increment)
    
    Object.keys(grid).forEach(position => {
      if(grid[position] > 9) {
        flashed.push(position)
        grid[position] = 0
      }
    })
  }
  let i = 0
  while (flashed.length !== Object.keys(grid).length) {
    step()
    i++;
  }
    
  return i
}

module.exports = { partOne, partTwo }
