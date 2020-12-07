const transformToInput = string => {
  return string.split(', ').join('\n')
}

module.exports = { transformToInput }
