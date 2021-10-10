const md5 = require('md5')

const partOne = (input) => {
  let answer
  let number = 1

  while (!answer) {
    if (md5(`${input}${number}`).startsWith('00000')) {
      answer = number
    }
    number++
  }

  return answer
}

const partTwo = (input) => {
  let answer
  let number = 1

  while (!answer) {
    if (md5(`${input}${number}`).startsWith('000000')) {
      answer = number
    }
    number++
  }

  return answer
}

module.exports = { partOne, partTwo }
