const END_PROGRAM = 99
const ADD = 1
const MULTIPLY = 2

const add = (input, instructionPointer) => {
  const firstParameter = input[input[instructionPointer + 1]]
  const secondParameter = input[input[instructionPointer + 2]]
  input[input[instructionPointer + 3]] = firstParameter + secondParameter
}

const multiply = (input, instructionPointer) => {
  const firstParameter = input[input[instructionPointer + 1]]
  const secondParameter = input[input[instructionPointer + 2]]
  input[input[instructionPointer + 3]] = firstParameter * secondParameter
}

const instructionPointerMove = {
  [ADD]: 4,
  [MULTIPLY]: 4,
  [END_PROGRAM]: 1
}

const instructionMap = {
  [ADD]: add,
  [MULTIPLY]: multiply,
  [END_PROGRAM]: () => {}
}

const runNextCommand = (input, instructionPointer) => {
  const currentInstruction = input[instructionPointer]

  instructionMap[currentInstruction](input, instructionPointer)

  if (currentInstruction === 99) return
  instructionPointer += instructionPointerMove[currentInstruction]
  runNextCommand(input, instructionPointer)
}

const partOne = (input) => {
  const instructionPointer = 0
  runNextCommand(input, instructionPointer)
  return input
}

const partTwo = (input) => {
  let noun = 0
  let verb = 0

  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const uniqueArray = input.map(x => x) // clone array, don't edit the first one
      uniqueArray[1] = i
      uniqueArray[2] = j
      const output = partOne(uniqueArray)[0]
      if (output === 19690720) {
        noun = i
        verb = j
      }
    }
  }
  return (100 * noun) + verb
}

module.exports = { partOne, partTwo }
