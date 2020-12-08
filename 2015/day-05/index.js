const VOWELS = ['a', 'e', 'i', 'o', 'u']
const BAD_LETTERS = ['ab', 'cd', 'pq', 'xy']

const partOne = (input) => {
  let niceStrings = 0

  input.split('\n').forEach(word => {
    let naughty = false
    let vowels = 0
    let doubles = 0
    BAD_LETTERS.forEach(letterSet => {
      if (word.includes(letterSet)) naughty = true
    })

    const letters = word.split('')

    letters.forEach((letter, index) => {
      if (VOWELS.includes(letter)) vowels++
      if (index === letters.length - 1) return

      if (letter === letters[index + 1]) doubles++
    })

    if (vowels < 3) naughty = true
    if (doubles < 1) naughty = true

    if (!naughty) niceStrings++
  })

  return niceStrings
}

const partTwo = (input) => {
  let niceStrings = 0

  input.split('\n').forEach(word => {
    let sandwich = false
    let doubleLetter = false

    const letters = word.split('')

    letters.forEach((letter, index) => {
      if (index === letters.length - 1) return
      if (index === letters.length - 2) return

      if (letter === letters[index + 2]) sandwich = true
    })

    letters.forEach((letter, index) => {
      if (doubleLetter) return
      if (index === letters.length - 1) return

      const searchTerm = `${letter}${letters[index + 1]}`
      const subWord = letters.slice(index + 2, letters.length).join('')

      if (subWord.includes(searchTerm)) doubleLetter = true
    })

    if (sandwich && doubleLetter) niceStrings++
  })

  return niceStrings
}

module.exports = { partOne, partTwo }
