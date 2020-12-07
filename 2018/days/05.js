const { getStringInput } = require('./helpers')

const compareCharacters = (a, b) => {
  const aCharCode = a.charCodeAt(0)
  const bCharCode = b.charCodeAt(0)

  const abDifference = aCharCode - bCharCode
  const baDifference = bCharCode - aCharCode
  if (abDifference === 32) return true
  if (baDifference === 32) return true
  return false
}

const filterPolymer = (stringToParse) => {
  let complete = false
  let input = stringToParse
  let output = []

  while (!complete) {
    let matchesNotFound = true
    let stack = []
    output = []

    input.forEach((character, index) => {
      stack.push(character)
      if (stack.length === 1) {
        if (input.length - 1 === index) output.push(stack.shift())
        return
      }
      if (compareCharacters(stack[0], stack[1])) {
        matchesNotFound = false
        stack = []
        return
      }
      output.push(stack.shift())
      if (input.length - 1 === index) output.push(stack.shift())
    })

    if (matchesNotFound) complete = true
    input = output
  }

  return output.length
}

const partOne = () => {
  const stringToParse = getStringInput('05-input').split('')

  return filterPolymer(stringToParse)
}

const partTwo = () => {
  const stringToParse = getStringInput('05-input')
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const letterCounts = letters.map(letter => {
    const lettersToRemove = new RegExp(letter, 'gi')
    const partialString = stringToParse.replace(lettersToRemove, '')
    return filterPolymer(partialString.split(''))
  })
  return letterCounts.reduce((acc, val) => {
    return val < acc ? val : acc
  }, stringToParse.length)
}


module.exports = {
  partOne,
  partTwo,
}
