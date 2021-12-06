const ts = require("typescript")

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

// const partTwo = (input) => {
//   const [, rawBusIds] = input.split('\n')
//   const busIds = rawBusIds.split(',').map(val => {
//     if (val === 'x') return 'x'
//     return parseInt(val, 10)
//   })

//   console.log(busIds)

//   let converganceTs = busIds[0]
//   let successful = false

//   while (!successful) {
//     converganceTs = converganceTs + busIds[0]
//     successful = busIds.reduce((validator, value, index) => {
//       if (!validator) return validator
//       if (value === 'x') return validator
//       return (converganceTs + index) % value === 0
//     }, true)
//   }

//   return converganceTs
// }

// safe with negative numbers unlike JS % operator
const absoluteModulo = (a, b) => ((a % b) + b) % b

const getInverse = (a, mod) => {
  const b = a % mod
  for (let i = 1; i < mod; i++) {
    if ((b * i) % mod === 1) {
      return i
    }
  }
  return 1
}

const chineseRemainderTheorem = (lines) => {
  // x =- a (mod n)
  // x - some unknown, constant value of t
  // a - bus number MINUS offset % bus number
  // n - cycle length (= bus number)

  // to solve each row, we also need
  // N - all n's added up
  // nU = N / n
  // i - inverse modulo

  const N = lines.reduce((acc, val) => {
    if (val === "x") return acc
    return acc === null ? val : acc * val
  }, null)

  const sum = lines.reduce((acc, val, idx) => {
    if (val === "x") {
      return acc
    }
    const a = absoluteModulo(val - idx, val)
    const nU = N / val
    const inverse = getInverse(nU, val)

    return acc + BigInt(BigInt(a) * BigInt(nU) * BigInt(inverse))
  }, 0n)

  return sum % BigInt(N)
}

// Credit to https://codesandbox.io/s/focused-lewin-subsf?file=/src/index.js:0-1854 for having a better way of doing this than my first one <3
const partTwo = (input) => {
  const [, rawBusIds] = input.split("\n")
  const busIds = rawBusIds.split(',').map(val => val === 'x' ? 'x' : parseInt(val, 10))
  return parseInt(`${chineseRemainderTheorem(busIds)}`, 10)
}

module.exports = { partOne, partTwo }
