const calculate = (input, stepCount) => {
  const [string, rawRules] = input.split('\n\n')
  const rules = {}
  rawRules.split('\n').map(line => line.split(' -> ')).forEach(([rule, newChar]) => {
    const [first, last] = rule.split('')
    rules[rule] = newChar
  })

  const rulesMap = {};

  Object.keys(rules).forEach(key => {
    rulesMap[key] = [key[0] + rules[key], rules[key] + key[1]];
  })

  let map = {};

  for (let i = 0; i < string.length - 1; i++) {
    const letterPair = string[i] + string[i + 1];
    if (!map?.[letterPair]) {
      map[letterPair] = 0
    }
    map[letterPair] += 1
  }
  
  const lastChar = string[string.length - 1];

  let i = 0;
  while ( i < stepCount) {
    let current = {};
    const keys = Object.keys(map);
    keys.forEach(key => {
      const next = rulesMap[key];
      
      if (!current?.[next[0]]) {
        current[next[0]] = 0
      }
      current[next[0]] += map[key]
      
      if (!current?.[next[1]]) {
        current[next[1]] = 0
      }
      current[next[1]] += map[key]
    })
    map = current;
    i++;
  }

  const count = {
    [lastChar]: 1
  };

  Object.keys(map).forEach(key => {
    if (!count?.[key[0]]) {
      count[key[0]] = 0
    }
    count[key[0]] += map[key]
  })

  const sortedCount = Object.values(count).sort((a, b) => a - b)

  return sortedCount[sortedCount.length - 1] - sortedCount[0]
}

const partOne = (input) => calculate(input, 10)
const partTwo = (input) => calculate(input, 40)

module.exports = { partOne, partTwo }
