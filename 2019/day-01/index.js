const partOne = (value) => {
  return value.reduce((acc, val) => {
    return acc + Math.floor(val / 3) - 2
  }, 0)
}

const calculateFuel = (value) => {
  const fuelRequiredForWeight = Math.floor(value / 3) - 2
  if (fuelRequiredForWeight <= 0) return 0
  return fuelRequiredForWeight + calculateFuel(fuelRequiredForWeight)
}

const partTwo = (value) => {
  return value.reduce((acc, val) => {
    const fuelRequired = calculateFuel(val)
    return acc + fuelRequired
  }, 0)
}

module.exports = { partOne, partTwo }
