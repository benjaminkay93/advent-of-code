const EMPTY_BLOCK = '.'

const partOne = (input) => {
  let blocksString = ''
  let currentBlock = 0
  input.split('').forEach((char, index) => {
    const block = index % 2
    const num = parseInt(char)

    if (block === 0) {
      blocksString += `${currentBlock}`.repeat(num)
      currentBlock = currentBlock + 1
      return
    }
    if (block === 1) {
      blocksString += EMPTY_BLOCK.repeat(num)
    }
  })
  const blocks = blocksString.split('')

  // 00...111...2...333.44.5555.6666.777.888899
  for (let i = 0; i < blocks.length; i++) {
    const char = blocks[i]

    if (char === EMPTY_BLOCK) {
      const subBlocks = blocks.slice(i).reverse()
      if (subBlocks.length === 0) return
      const firstNonEmpty = subBlocks.findIndex((block) => block !== EMPTY_BLOCK)
      if (firstNonEmpty === -1) return
      blocks[i] = subBlocks[firstNonEmpty]
      blocks[blocks.length - firstNonEmpty - 1] = EMPTY_BLOCK
    }
  }

  return blocks

  // 0099811188827773336446555566..............
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
