const { getArrayInput } = require('./helpers')

const sortArrayByTime = input => input.sort()

const addTimeToGuard = (guardLog, guard, time) => {
  if (!guardLog[guard][time]) guardLog[guard][time] = 0
  if (!guardLog[guard].totalMinutesAsleep) guardLog[guard].totalMinutesAsleep = 0
  guardLog[guard] = {
    ...guardLog[guard],
    [time]: guardLog[guard][time] + 1,
    totalMinutesAsleep: guardLog[guard].totalMinutesAsleep + 1
  }
}

const getGuardLog = input => {
  const regex = /\[[\d]{4}-[\d]{2}-[\d]{2} [\d]{2}:([\d]{2})\] ([\w]*) (#[\d]*|[\w]*)/
  let guard = ''
  const guardLog = {}
  let startTime = 0
  let endTime = 0

  input.forEach(log => {
    const parsedLog = regex.exec(log)
    const timestamp = parseInt(parsedLog[1], 10)
    const operator = parsedLog[2]
    if (operator === 'Guard') {
      guard = parsedLog[3].replace('#', '')
    }
    if (operator === 'falls') {
      startTime = timestamp
    }
    if (operator === 'wakes') {
      if (!guardLog[guard]) guardLog[guard] = {}
      endTime = timestamp

      for (let i = startTime; i < endTime; i++) {
        addTimeToGuard(guardLog, guard, i)
      }
    }
  })
  return guardLog
}

const getSleepiestGuard = guardLog => {
  return Object.keys(guardLog).reduce((accumulator, guard) => {
    if (!accumulator.totalMinutesAsleep) accumulator.totalMinutesAsleep = 0
    if (guardLog[guard].totalMinutesAsleep > accumulator.totalMinutesAsleep) {
      return {
        guard: parseInt(guard, 10),
        totalMinutesAsleep: guardLog[guard].totalMinutesAsleep
      }
    }
    return accumulator
  }, {})
}

const getSleepiestMinute = (guardLog, guard) => {
  return Object.keys(guardLog[guard]).reduce((accumulator, key) => {
    if (key === 'totalMinutesAsleep') return accumulator
    if (!accumulator.minutesAsleep) accumulator.minutesAsleep = 0
    if (guardLog[guard][key] > accumulator.minutesAsleep) {
      return {
        guard,
        minute: parseInt(key, 10),
        minutesAsleep: guardLog[guard][key]
      }
    }
    return accumulator
  }, {})
}
const getSleepiestMinutePerGuard = guardLog => {
  return Object.keys(guardLog).map(key => getSleepiestMinute(guardLog, key))
}

const partOne = () => {
  const input = getArrayInput('04-input')
  const sortedInput = sortArrayByTime(input)
  const guardLog = getGuardLog(sortedInput)
  const sleepiestGuard = getSleepiestGuard(guardLog)
  const sleepiestMinute = getSleepiestMinute(guardLog, sleepiestGuard.guard)
  return sleepiestGuard.guard * sleepiestMinute.minute
}

const partTwo = () => {
  const input = getArrayInput('04-input')
  const sortedInput = sortArrayByTime(input)
  const guardLog = getGuardLog(sortedInput)
  const sleepiestMinutePerGuard = getSleepiestMinutePerGuard(guardLog)
  const guardMostFrequentMinuteAsleep = sleepiestMinutePerGuard.reduce((accumulator, guard) => {
    if (!accumulator.minutesAsleep) accumulator.minutesAsleep = 0
    if (guard.minutesAsleep > accumulator.minutesAsleep) {
      return {
        guard: parseInt(guard.guard, 10),
        minute: guard.minute,
        minutesAsleep: guard.minutesAsleep
      }
    }
    return accumulator
  }, {})
  return guardMostFrequentMinuteAsleep.guard * guardMostFrequentMinuteAsleep.minute
}

module.exports = {
  partOne,
  partTwo
}
