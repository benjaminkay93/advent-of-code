const INCREASE = '('
const DECREASE = ')'

const partOne = (input) => {
  let count = 0 
  const parseInput = input.split('').forEach(element => {
      if (element === INCREASE) count++
      if (element === DECREASE) count--
  });
  return count
}

const partTwo = (input) => {
  let count = 0
  let indexFound = 0
  const parseInput = input.split('').forEach((element, index) => {
      if (indexFound) return;
      if (element === INCREASE) count++
      if (element === DECREASE) count--

      if (count === -1) indexFound = index
  });
  return indexFound + 1
}

module.exports = { partOne, partTwo }
