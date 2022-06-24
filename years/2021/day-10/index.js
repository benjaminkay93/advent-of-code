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

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
