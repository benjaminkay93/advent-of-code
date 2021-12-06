const simulateDay = (initialCounts) => {
  const fishToSpawn = initialCounts[0]

  return {
    0: initialCounts[1],
    1: initialCounts[2],
    2: initialCounts[3],
    3: initialCounts[4],
    4: initialCounts[5],
    5: initialCounts[6],
    6: initialCounts[7] + fishToSpawn,
    7: initialCounts[8],
    8: fishToSpawn,
  }
}

const partOne = (input) => {
  let counts = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  }

  input.split(',').forEach(val => {
    if (!counts[val]) {
      counts[val] = 1
      return;
    }
    counts[val] = counts[val] + 1
  })

  for (let i = 1; i <= 80; i++) {
    counts = simulateDay(counts)
  }

  const totalFish = Object.values(counts).reduce((acc, val) => acc+val, 0)
  
  return totalFish
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
