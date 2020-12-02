const {partOne, partTwo} = require('.');
const { input } = require('./input');

test('part 1', () => {
  const testInput = `1721
    979
    366
    299
    675
    1456`

  expect(partOne(testInput)).toBe(514579)
})

test('part 1 actual', () => {
 
    expect(partOne(input)).toBe(876459)
  })

test('part 2', () => {
    const testInput = `1721
      979
      366
      299
      675
      1456`
  
    expect(partTwo(testInput)).toBe(241861950)
  })
  
  test('part 2 actual', () => {
   
      expect(partTwo(input)).toBe(116168640)
    })