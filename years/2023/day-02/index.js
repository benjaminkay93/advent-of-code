const partOneTarget = {
  red: 12,
  green: 13,
  blue: 14,
}

const partOne = (input) => {
  const games = input.split('\n').map((line, index) => {
    const [, gameRaw] = line.split(': ')
    const gameId = index + 1

    const gameParsed = gameRaw.split('; ').map(game => {
      return game.split(', ').reduce((acc, set) => {
        const [actColor, value] = set.split(' ').reverse()
        return {
          ...acc,
          [actColor]: Number(value),
        }
      }, {})
    })
    return {
      gameId,
      sets: gameParsed,
    }
  })

  const filteredGames = games.filter((game) => {
    const doesBreakRule = game.sets.reduce((acc, set) => {
      if (acc === true) return true
      if (set.red > partOneTarget.red) return true
      if (set.green > partOneTarget.green) return true
      if (set.blue > partOneTarget.blue) return true
      return false
    }, false)
    return !doesBreakRule
  }).reduce((acc, val) => {
    return acc + val.gameId
  }, 0)

  return filteredGames
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
