const EAST = 'E'
const WEST = 'W'
const NORTH = 'N'
const SOUTH = 'S'
const LEFT = 'L'
const RIGHT = 'R'
const FORWARD = 'F'

const leftMap = {
  [EAST]: NORTH,
  [NORTH]: WEST,
  [WEST]: SOUTH,
  [SOUTH]: EAST,
}

const rightMap = {
  [EAST]: SOUTH,
  [SOUTH]: WEST,
  [WEST]: NORTH,
  [NORTH]: EAST,
}

const getManhattanDistance = (x, y) => Math.sqrt(x * x) + Math.sqrt(y * y)

const partOne = (input) => {
  let long = 0
  let lat = 0
  let currentDirection = EAST

  const action = {
    [EAST]: (amount) => { long = long + amount },
    [WEST]: (amount) => { long = long - amount },
    [NORTH]: (amount) => { lat = lat + amount },
    [SOUTH]: (amount) => { lat = lat - amount },
    [LEFT]: (amount) => {
      const valueToRotate = amount / 90
      for (let i = 0; i < valueToRotate; i++) {
        currentDirection = leftMap[currentDirection]
      }
    },
    [RIGHT]: (amount) => {
      const valueToRotate = amount / 90
      for (let i = 0; i < valueToRotate; i++) {
        currentDirection = rightMap[currentDirection]
      }
    },
    [FORWARD]: (amount) => action[currentDirection](amount),
  }

  input.split('\n').forEach(val => {
    const direction = val.charAt(0)
    const amount = parseInt(val.substring(1), 10)

    action[direction](amount)
  })

  return getManhattanDistance(long, lat)
}

const partTwo = (input) => {
  let long = 0
  let lat = 0
  let waypointLong = 10 // +ve EAST -ve WEST
  let waypointLat = 1 // +ve NORTH -ve SOUTH

  // 4 lat, -10 Long
  // 10 lat, 4 long

  const action = {
    [EAST]: (amount) => { waypointLong = waypointLong + amount },
    [WEST]: (amount) => { waypointLong = waypointLong - amount },
    [NORTH]: (amount) => { waypointLat = waypointLat + amount },
    [SOUTH]: (amount) => { waypointLat = waypointLat - amount },
    [LEFT]: (amount) => {
      const valueToRotate = amount / 90
      for (let i = 0; i < valueToRotate; i++) {
        const newWaypointLong = -waypointLat
        const newWaypointLat = waypointLong

        waypointLong = newWaypointLong
        waypointLat = newWaypointLat
      }
    },
    [RIGHT]: (amount) => {
      const valueToRotate = amount / 90
      for (let i = 0; i < valueToRotate; i++) {
        const newWaypointLong = waypointLat
        const newWaypointLat = -waypointLong

        waypointLong = newWaypointLong
        waypointLat = newWaypointLat
      }
    },
    [FORWARD]: (amount) => {
      long = long + (waypointLong * amount)
      lat = lat + (waypointLat * amount)
    },
  }

  input.split('\n').forEach(val => {
    const direction = val.charAt(0)
    const amount = parseInt(val.substring(1), 10)
    action[direction](amount)
  })

  return getManhattanDistance(long, lat)
}

module.exports = { partOne, partTwo }
