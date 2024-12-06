const partOne = (input) => {
  const rules = {}

  const [, messages] = input.split('\n\n').map((part, index) => part.split('\n').map(line => {
    if (index === 0) {
      const [before, after] = line.split('|')
      if (rules[before]) {
        rules[before].push(after)
        return []
      }
      rules[before] = [after]
      return []
    }
    if (index === 1) {
      return line.split(',')
    }
    return []
  }))

  const validMessages = messages.filter(message => {
    let valid = true
    message.forEach((item, index) => {
      for (let i = 0; i < index; i++) {
        if (!rules[item]) {
          break
        }
        if (rules[item].includes(message[i])) {
          valid = false
          break
        }
      }
    })
    return valid
  })

  return validMessages.reduce((acc, message) => {
    return acc + parseInt(message[Math.ceil(message.length / 2) - 1])
  }, 0)
}

const swapAndRevalidate = (rules, message) => {
  const validatedMessage = [...message]
  validatedMessage.forEach((item, index) => {
    for (let i = 0; i < index; i++) {
      if (!rules[item]) {
        break
      }
      if (rules[item].includes(validatedMessage[i])) {
        validatedMessage[index] = validatedMessage[i]
        validatedMessage[i] = item
        break
      }
    }
  })
  let isAllNotValid = false
  validatedMessage.forEach((item, index) => {
    for (let i = 0; i < index; i++) {
      if (!rules[item]) {
        break
      }
      if (rules[item].includes(validatedMessage[i])) {
        isAllNotValid = true
        break
      }
    }
  })
  if (isAllNotValid) {
    return swapAndRevalidate(rules, validatedMessage)
  }
  return validatedMessage
}

const partTwo = (input) => {
  const rules = {}

  const [, messages] = input.split('\n\n').map((part, index) => part.split('\n').map(line => {
    if (index === 0) {
      const [before, after] = line.split('|')
      if (rules[before]) {
        rules[before].push(after)
        return []
      }
      rules[before] = [after]
      return []
    }
    if (index === 1) {
      return line.split(',')
    }
    return []
  }))

  const invalidMessages = messages.filter(message => {
    let valid = false
    message.forEach((item, index) => {
      for (let i = 0; i < index; i++) {
        if (!rules[item]) {
          break
        }
        if (rules[item].includes(message[i])) {
          valid = true
          break
        }
      }
    })
    return valid
  })

  return invalidMessages.map(message => swapAndRevalidate(rules, message)).reduce((acc, message) => {
    return acc + parseInt(message[Math.ceil(message.length / 2) - 1])
  }, 0)
}

module.exports = { partOne, partTwo }
