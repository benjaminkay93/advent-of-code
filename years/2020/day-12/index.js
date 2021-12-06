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

const partOne = (input) => {
  const parsedInput = input.split('\n')

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

  parsedInput.forEach(val => {
    const direction = val.charAt(0)
    const amount = parseInt(val.substring(1), 10)

    action[direction](amount)
  })

  return Math.sqrt(long * long) + Math.sqrt(lat * lat)
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
