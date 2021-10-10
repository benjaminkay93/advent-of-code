const codeRunner = program => {
  const visited = []
  let position = 0
  let accumulator = 0
  let infinite = false

  const instructionSet = {
    nop: () => {
      position++
      execute()
    },
    acc: (modifier) => {
      accumulator = accumulator + modifier
      position++
      execute()
    },
    jmp: (modifier) => {
      position = position + modifier
      execute()
    }
  }

  const execute = () => {
    if (visited.includes(position)) {
      infinite = true
      return
    }

    if (position === program.length) {
      return
    }
    visited.push(position)

    const { code, modifier } = program[position]

    instructionSet[code](modifier)
  }

  execute()

  return {
    infinite,
    accumulator
  }
}

const partOne = (input) => {
  const program = input.split('\n').map(input => {
    const [code, modifier] = input.split(' ')
    return {
      code,
      modifier: parseInt(modifier, 10)
    }
  })

  const { accumulator } = codeRunner(program)

  return accumulator
}

const partTwo = (input) => {
  const baseProgram = input.split('\n').map(input => {
    const [code, modifier] = input.split(' ')
    return {
      code,
      modifier: parseInt(modifier, 10)
    }
  })
  let found = false
  let result

  baseProgram.forEach((line, index) => {
    if (found) return
    const newProgram = baseProgram.map(newLine => ({ ...newLine }))

    if (line.code === 'nop') {
      newProgram[index].code = 'jmp'
    }
    if (line.code === 'jmp') {
      newProgram[index].code = 'nop'
    }

    const ranResults = codeRunner(newProgram)
    if (!ranResults.infinite) {
      found = true
      result = ranResults
    }
  })

  return result.accumulator
}

module.exports = { partOne, partTwo }
