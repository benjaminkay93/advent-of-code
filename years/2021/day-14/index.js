const partOne = (input, steps = 10) => {
  const [string, rawRules] = input.split('\n\n')
  const rules = {}
  rawRules.split('\n').map(line => line.split(' -> ')).forEach(([rule, newChar]) => {
    const [first, last] = rule.split('')
    rules[rule] = newChar
  })

  let oldString = string

  const step = () => {
    const stringArray = oldString.split('')
    
    let newString = ''
    
    stringArray.forEach((char, index) => {
      if (index + 1 === stringArray.length) {
        newString = newString + char
        return
      }
      newString = newString + char + rules[`${char}${stringArray[index + 1]}`]
    })
    oldString = newString
  }

  let i = 0;
  while ( i < steps) {
    step()
    i++
    console.log('step', i)
  }

  const count = {}

  oldString.split('').forEach(char => {
    if(!count?.[char]) count[char] = 0
    count[char] += 1
  })

  const sortedCount = Object.values(count).sort((a, b) => a - b)

  return sortedCount[sortedCount.length - 1] - sortedCount[0]
}

const partTwo = (input) => partOne(input, 40)

module.exports = { partOne, partTwo }
