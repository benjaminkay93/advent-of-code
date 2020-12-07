const transformToInput = string => {
  return string.split(', ').join('\n')
}

export default { transformToInput }
