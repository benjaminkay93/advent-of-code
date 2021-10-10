const { getArrayInput } = require('./helpers')

let grid = {}
const claims = {}

const claimedSquares = (input) => {
  const claims = []
  let x = input.xStart
  let y = input.yStart
  const xMax = input.xStart + input.width
  const ymax = input.yStart + input.height

  while (x < xMax) {
    while (y < ymax) {
      claims.push(`${x},${y}`)
      y++
    }
    y = input.yStart
    x++
  }
  return claims
}

const getClaimedSquares = item => {
  const regex = /#([\d]*) @ ([\d]*),([\d]*): ([\d]*)x([\d]*)/
  const regexedInput = regex.exec(item)

  const parsedInput = {
    xStart: parseInt(regexedInput[2], 10),
    yStart: parseInt(regexedInput[3], 10),
    width: parseInt(regexedInput[4], 10),
    height: parseInt(regexedInput[5], 10),
  }
  const id = regexedInput[1]
  const wants = claimedSquares(parsedInput)

  claims[id] = id

  return {
    id,
    wants,
  }
}

const partOne = () => {
  const input = getArrayInput('03-input')

  const claimsArray = input.map(getClaimedSquares)

  grid = claimsArray.reduce((accumulator, claim) => {
    claim.wants.forEach(locator => {
      if (!accumulator[locator]) accumulator[locator] = []
      accumulator[locator].push(claim.id)
    })
    return accumulator
  }, {})

  return Object.values(grid).reduce((acc, value) => {
    return value.length > 1 ? acc + 1 : acc
  }, 0)
}

const partTwo = () => {
  const input = getArrayInput('03-input')

  const claimsArray = input.map(getClaimedSquares)

  const grid = claimsArray.reduce((accumulator, claim) => {
    claim.wants.forEach(locator => {
      if (!accumulator[locator]) accumulator[locator] = []
      accumulator[locator].push(claim.id)
    })
    return accumulator
  }, {})

  Object.values(grid).forEach(array => {
    if (array.length > 1) {
      array.forEach(item => {
        delete claims[item]
      })
    }
  })

  return parseInt(Object.values(claims)[0], 10)
}

module.exports = {
  partOne,
  partTwo,
}
