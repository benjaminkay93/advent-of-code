const nextBusDepart = (startingTs, busIds) => {
  const timeToNextBus = busIds.map(id => id - (startingTs % id))

  const nextBusIdIndex = timeToNextBus.reduce((lowest, next, index) => {
    return next < timeToNextBus[lowest] ? index : lowest
  }, 0)

  return {
    timeUntilBus: timeToNextBus[nextBusIdIndex],
    busId: busIds[nextBusIdIndex],
  }
}

const partOne = (input) => {
  const [startingTs, rawBusIds] = input.split('\n')
  const busIds = rawBusIds.split(',').filter(id => id !== 'x')

  const { timeUntilBus, busId } = nextBusDepart(startingTs, busIds)

  return timeUntilBus * busId
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
