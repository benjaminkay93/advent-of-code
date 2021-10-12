const EMPTY = 'L'
const OCCUPIED = '#'
const FLOOR = '.'

const getSurroundingSeats = (input, x, y, xLength, yLength, cell) => {
  if (cell === FLOOR) return FLOOR

  let fullSeats = 0;

  for(let i = -1; i < 2; i++ ){
    for(let j = -1; j < 2; j++){
      if(!(i == 0 && j == 0) && !(y + i <= -1 || y + i >= yLength) && !(x + j <= -1 || x + j >= xLength)){ // Don't count itself.
        if(input[y + i][x + j] === OCCUPIED) {
          fullSeats = fullSeats + 1
        }
      }
    }
  }
  if (fullSeats === 0) return OCCUPIED
  if (fullSeats >= 4) return EMPTY
  return cell
}

const flattenArray = (array) => {
  return array.map(subArray => subArray.join('')).join('\n')
}

let lastInput = ''

const recursivelyMakeStable = (input) => {
  if(lastInput === input) return input;
  lastInput = input
  const startingInput = input.split('\n').map(line => line.split(''))

  const xLength = startingInput[0].length
  const yLength = startingInput.length

  const arrayOne = startingInput.map((line, y) => line.map((cell, x) => {
    const result = getSurroundingSeats(startingInput, x, y, xLength, yLength, cell)
    return result
  }))

  return recursivelyMakeStable(flattenArray(arrayOne))
}

const partOne = (input) => {
  const stableArray = recursivelyMakeStable(input);
  return (stableArray.match(new RegExp(OCCUPIED, "g")) || []).length
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
