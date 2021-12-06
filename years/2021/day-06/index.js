const simulateDay = (currentFish) => {
  const fishToSpawn = currentFish[0]

  return {
    0: currentFish[1],
    1: currentFish[2],
    2: currentFish[3],
    3: currentFish[4],
    4: currentFish[5],
    5: currentFish[6],
    6: currentFish[7] + fishToSpawn,
    7: currentFish[8],
    8: fishToSpawn,
  }
}

const simulateDays = (input, days) => {
  let currentFish = {
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
    currentFish[val] = currentFish[val] + 1
  })

  for (let i = 1; i <= days; i++) {
    currentFish = simulateDay(currentFish)
  }

  return Object.values(currentFish).reduce((acc, val) => acc+val, 0)
}

const partOne = (input) => simulateDays(input, 80)

const partTwo = (input) => simulateDays(input, 256)

module.exports = { partOne, partTwo }
