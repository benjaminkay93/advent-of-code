const getSeatIds = (input) => input.split('\n').map(ticket => {
  const ticketParsed = ticket.split('')
  const rowBinary = ticketParsed.slice(0, 7).join().replace(/F/g, 0).replace(/B/g, 1).replace(/,/g, '')
  const columnBinary = ticketParsed.slice(7, 10).join().replace(/L/g, 0).replace(/R/g, 1).replace(/,/g, '')
  const row = parseInt(rowBinary, 2)
  const column = parseInt(columnBinary, 2)

  return row * 8 + column
})

const partOne = (input) => {
  const seatIds = getSeatIds(input)

  return Math.max(...seatIds)
}

const partTwo = (input) => {
  const seatIds = getSeatIds(input).sort((a, b) => a - b)

  const maxRow = 128
  const maxColumn = 8

  const allSeatIds = []

  for (let row = 0; row < maxRow; row++) {
    for (let column = 0; column < maxColumn; column++) {
      allSeatIds.push(row * 8 + column)
    }
  }

  const difference = allSeatIds.filter(seat => {
    const doesHaveAllocation = seatIds.includes(seat)

    return !doesHaveAllocation
  })
  return difference.filter((val, index) => {
    if (index === 0) return false
    if (index === difference.length - 1) return false
    if ((val + 1) === difference[index + 1] && (val - 1) === difference[index - 1]) return false
    return true
  })[1]
}

module.exports = { partOne, partTwo }
