const { getArrayInput } = require('./helpers')

const getCountsInWord = word => {
  const object = {}
  word.split('').forEach(letter => {
    switch (object[letter]) {
      case 2:
        object[letter] = 3
        return
      case 1:
        object[letter] = 2
        return
      default:
        object[letter] = 1
    }
  })

  const values = Object.values(object)
  return {
    three: values.includes(3),
    two: values.includes(2)
  }
}

const partOne = () => {
  const input = getArrayInput('02-input')
  const counts = input.map(getCountsInWord).reduce((accumulator, word) => {
    return {
      three: word.three ? accumulator.three + 1 : accumulator.three,
      two: word.two ? accumulator.two + 1 : accumulator.two
    }
  }, { three: 0, two: 0 })
  return counts.three * counts.two
}

const yankableWordsAndDestination = (words, destination) => (firstIndex, secondIndex) => {
  destination.push(words[firstIndex], words[secondIndex])
  return true
}

const countMatchingLettersInWord = (wordToCheck, wordToCheckAgainst) => {
  return wordToCheck
    .map((letter, index) => letter === wordToCheckAgainst[index] ? 1 : 0)
    .reduce((acc, val) => (acc + val), 0)
}

const deleteNonMatchingLetter = ([firstWord, secondWord]) => {
  return firstWord
    .filter((letter, index) => letter === secondWord[index])
    .join('')
}

const partTwo = () => {
  const input = getArrayInput('02-input')
  const words = input.map(word => word.split(''))
  const matchingWords = []

  const hoistWords = yankableWordsAndDestination(words, matchingWords)

  words.some((wordToCheck, inputIndex) => {
    return words.some((wordToCheckAgainst, checkIndex) => {
      const count = countMatchingLettersInWord(wordToCheck, wordToCheckAgainst)

      return count === (wordToCheck.length - 1)
        ? hoistWords(inputIndex, checkIndex)
        : false
    })
  })

  return deleteNonMatchingLetter(matchingWords)
}

module.exports = {
  partOne,
  partTwo
}
