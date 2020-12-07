const stringToArray = string => {
  return string.split('\n')
}

const commaSeparatedStringToNumArray = string => {
  return string.split(',').map(val => parseInt(val, 10))
}

module.exports = { stringToArray, commaSeparatedStringToNumArray }