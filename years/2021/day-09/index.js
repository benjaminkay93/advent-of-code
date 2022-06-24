const partOne = (input) => {
  const grid = {}
  const visitedSet = new Set();
  const lowestPoints = new Set()
  input.split('\n').forEach((line, xIndex) => line.split('').forEach((number, yIndex) => grid[`${xIndex},${yIndex}`] = parseInt(number, 10)))

  Object.keys(grid).forEach(position => {
    if (visitedSet.has(position)) return;
    const [x, y] = position.split(',').map(value => parseInt(value, 10))
    const above = `${x},${y+1}`
    const below = `${x},${y-1}`
    const right = `${x+1},${y}`
    const left = `${x-1},${y}`
    let count = 0
    let expectedCount = 0

    if(grid?.[above] !== undefined) expectedCount += 1
    if(grid?.[below] !== undefined) expectedCount += 1
    if(grid?.[left] !== undefined) expectedCount += 1
    if(grid?.[right] !== undefined) expectedCount += 1

    if (grid[position] < grid?.[above]) {
      visitedSet.add(above)
      count += 1
    }
    if (grid[position] < grid?.[below]) {
      visitedSet.add(below)
      count += 1
    }
    if (grid[position] < grid?.[left]) {
      visitedSet.add(left)
      count += 1
    }
    if (grid[position] < grid?.[right]) {
      visitedSet.add(right)
      count += 1
    }
    visitedSet.add(position)

    if (count === expectedCount){
      lowestPoints.add(position)
    }

  })

  return Array.from(lowestPoints).reduce((acc, val) => {
    return acc + (grid[val] + 1)
  }, 0)
}

const partTwo = (input) => {
  const grid = {}
  const visitedSet = new Set();
  const lowestPoints = new Set()
  input.split('\n').forEach((line, xIndex) => line.split('').forEach((number, yIndex) => grid[`${xIndex},${yIndex}`] = parseInt(number, 10)))

  Object.keys(grid).forEach(position => {
    if (visitedSet.has(position)) return;
    const [x, y] = position.split(',').map(value => parseInt(value, 10))
    const above = `${x},${y+1}`
    const below = `${x},${y-1}`
    const right = `${x+1},${y}`
    const left = `${x-1},${y}`
    let count = 0
    let expectedCount = 0

    if(grid?.[above] !== undefined) expectedCount += 1
    if(grid?.[below] !== undefined) expectedCount += 1
    if(grid?.[left] !== undefined) expectedCount += 1
    if(grid?.[right] !== undefined) expectedCount += 1

    if (grid[position] < grid?.[above]) {
      visitedSet.add(above)
      count += 1
    }
    if (grid[position] < grid?.[below]) {
      visitedSet.add(below)
      count += 1
    }
    if (grid[position] < grid?.[left]) {
      visitedSet.add(left)
      count += 1
    }
    if (grid[position] < grid?.[right]) {
      visitedSet.add(right)
      count += 1
    }
    visitedSet.add(position)

    if (count === expectedCount){
      lowestPoints.add(position)
    }

  })

  const sets = {}
  const newVisited = new Set()

  Array.from(lowestPoints).forEach((val) => {
    sets[val] = new Set()
  })

  const discoverBasin = (position, startPosition) => {
    if (newVisited.has(position)) return;
    newVisited.add(position)
    const [x, y] = position.split(',').map(value => parseInt(value, 10))
    const above = `${x},${y+1}`
    const below = `${x},${y-1}`
    const right = `${x+1},${y}`
    const left = `${x-1},${y}`

    sets[startPosition].add(position)

    if(grid?.[above] && grid[above] !==9) discoverBasin(above, startPosition)
    if(grid?.[below] && grid[below] !==9) discoverBasin(below, startPosition)
    if(grid?.[left] && grid[left] !==9) discoverBasin(left, startPosition)
    if(grid?.[right] && grid[right] !==9) discoverBasin(right, startPosition)
  }

  Object.keys(sets).forEach(val => discoverBasin(val, val))

  const sortedArray = Object.values(sets).map(set => Array.from(set).length).sort((a, b) =>  b - a)

  return sortedArray[0] * sortedArray[1] * sortedArray[2]
}

module.exports = { partOne, partTwo }
