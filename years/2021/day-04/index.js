const partOne = (input) => {
  const [calloutRaw, ...boardsRaw] = input.split('\n\n')
  const bingoCalloutOrder = calloutRaw.split(',')
  const processedBoards = boardsRaw.map(board => {
    const values = board.trim().split(/\s\s|\s/)
    const rows = [
      [values[0], values[1], values[2], values[3], values[4]],
      [values[5], values[6], values[7], values[8], values[9]],
      [values[10], values[11], values[12], values[13], values[14]],
      [values[15], values[16], values[17], values[18], values[19]],
      [values[20], values[21], values[22], values[23], values[24]],
    ]
    const columns = [
      [values[0], values[5], values[10], values[15], values[20]],
      [values[1], values[6], values[11], values[16], values[21]],
      [values[2], values[7], values[12], values[17], values[22]],
      [values[3], values[8], values[13], values[18], values[23]],
      [values[4], values[9], values[14], values[19], values[24]],
    ]
    return {
      values,
      rows,
      columns,
    }
  })

  const game = {}

  let bingo = false;
  let bingoValue = null;
  let bingoRemaining = null;

  bingoCalloutOrder.forEach(val => {
    game[val] = [];
    processedBoards.forEach((_, index) => {
      if (processedBoards[index].values.includes(val)) {
        game[val] = [...game[val], processedBoards[index]]
      }
    })
    game[val].forEach((board, boardIndex) => {
      if(bingo) return;
      board.rows.forEach((row, rowIndex) => {
        if(row.indexOf(val) < 0) return;

        const currentRow = board.rows[rowIndex]
        currentRow.splice(row.indexOf(val), 1)

        if(currentRow.length !== 0) return;
        
        bingo = true
        bingoValue = val
        bingoRemaining= board.rows
      })
      board.columns.forEach((column, columnIndex) => {
        if(column.indexOf(val) < 0) return;

        const currentColumn = board.columns[columnIndex]
        currentColumn.splice(column.indexOf(val), 1)
        
        if(currentColumn.length !== 0) return;

        bingo = true
        bingoValue = val
        bingoRemaining= board.columns
      })
    })
  })

  const sumOfRemainingBoard = bingoRemaining.reduce((acc, val) => {
    return acc + val.reduce((rowAcc, rowVal) => parseInt(rowVal, 10) + rowAcc, 0)
  }, 0)

  return parseInt(bingoValue, 10) * sumOfRemainingBoard
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
