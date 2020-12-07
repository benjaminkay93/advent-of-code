import day from './days/day'

const report = (day, dayFunction, part) => {
  const startOfRunTime = Date.now()
  const solution = dayFunction[part]()
  const timeTaken = Date.now() - startOfRunTime
  console.log(`  Day ${day} took ${timeTaken}ms and is: ${solution}`)
}

const reportAllDays = () => {
  console.log('\nThe Solutions to Advent of Code 2018 are: \n')
  report('1.1', day.one, 'partOne')
  report('1.2', day.one, 'partTwo')
  report('2.1', day.two, 'partOne')
  report('2.2', day.two, 'partTwo')
  report('3.1', day.three, 'partOne')
  report('3.2', day.three, 'partTwo')
  report('4.1', day.four, 'partOne')
  report('4.2', day.four, 'partTwo')
  report('5.1', day.five, 'partOne')
  report('5.2', day.five, 'partTwo')
}

export default reportAllDays
