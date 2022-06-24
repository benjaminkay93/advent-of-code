const matchingPairs = {
  '[': ']',
  '(': ')',
  '{': '}',
  '<': '>',
}
const points = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}

const partTwoPoints = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
}

const partOne = (input) => {
  const badLines = input.split('\n').map(line => {
    const stack = []
    let done = false
    let error = null
    line.split('').forEach(char => {
      if(done) return;
      if(matchingPairs[char]) {
        stack.push(char)
        return;
      }
      const last = stack.pop()
      if (matchingPairs[last] !== char) {
        done = true
        error = char
      }
    })
    return error
  })
  return badLines.filter(a => a).map(val => points[val]).reduce((acc, val) => acc + val, 0)
}

const partTwo = (input) => {
  const lines = input.split('\n').filter((line, index) => {
    const stack = []
    let done = false
    let error = true
    line.split('').forEach((char) => {
      if(done) return;
      if(matchingPairs[char]) {
        stack.push(char)
        return;
      }
      const last = stack.pop()
      if (matchingPairs[last] !== char) {
        done = true
        error = false
      }
    })
    return error
  })
  const charsToComplete = lines.map((line, ) => {
    const stack = []
    let done = false
    const chars = line.split('')
    chars.forEach((char, index) => {
      if(done) return;
      if(matchingPairs[char]) {
        stack.push(char)
        return;
      }
      const last = stack.pop()
    })
    return stack.reverse().map(item => matchingPairs[item])
  })

  const scores = charsToComplete.map(line => {
    return line.reduce((acc, val) => {
      return (acc * 5) + partTwoPoints[val]
    }, 0)
  }).sort((a,b) => a-b)

  return scores[Math.floor(scores.length / 2)]
}
// }}]])})] - 288957 total points.
// )}>]}) - 5566 total points.
// }}>}>)))) - 1480781 total points.
// ]]}}]}]}> - 995444 total points.
// ])}> - 294 total points.

module.exports = { partOne, partTwo }
