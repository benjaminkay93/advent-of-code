const inputParser = (input) => {
  return input.split('\n').map(line => {
    const [policy, string] = line.split(': ')
    const [range, letter] = policy.split(' ').filter(string => string)
    const [firstPosition, lastPosition] = range.split('-')
    return {
      firstPosition: parseInt(firstPosition, 10),
      lastPosition: parseInt(lastPosition, 10),
      letter,
      string: string.split(''),
    }
  })
}

const partOne = (input) => {
  let passes = 0
  inputParser(input).forEach(line => {
    let letterCount = 0
    line.string.forEach(letter => {
      if (letter === line.letter) {
        letterCount++
      }
    })

    if (letterCount <= line.lastPosition && letterCount >= line.firstPosition) {
      passes++
    }
  })

  return passes
}

const partTwo = (input) => {
  let passes = 0
  inputParser(input).forEach(line => {
    const { letter } = line
    const letter1 = line.string[line.firstPosition - 1] === letter
    const letter2 = line.string[line.lastPosition - 1] === letter

    if ((letter1 && !letter2) || (!letter1 && letter2)) {
      passes++
    }
  })

  return passes
}

module.exports = { partOne, partTwo }
