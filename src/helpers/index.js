const stringToArrayNum = (input) => {
  return input.split('\n').map(num => parseInt(num, 10))
}

module.exports = { stringToArrayNum }
