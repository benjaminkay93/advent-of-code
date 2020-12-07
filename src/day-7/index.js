const SEARCH_BAG = ['shiny gold']

const fingHoldingBags = (input, searchTerm) => {
  const inputKeys = Object.keys(input)

  let containingArrays = []
  searchTerm.forEach(search => inputKeys.forEach(key => {
    //   console.log(searchTerm, search, ', ',key)
    if (input[key].includes(search)) {
      containingArrays.push(key)
    }
  }))

  return containingArrays
}

const partOne = (input) => {
  const parsedInput = input.split('\n').reduce((acc, bag) => {
    const [hold, contents] = bag.split(' bags contain ')
    return {
      ...acc,
      [hold]: contents
    }
  }, {})

  const bags = new Set()

  let result = fingHoldingBags(parsedInput, SEARCH_BAG)
  result.forEach(individualResult => bags.add(individualResult))

  do {
    result = fingHoldingBags(parsedInput, result)
    result.forEach(individualResult => bags.add(individualResult))
  } while (result.length !== 0)

  return bags.size
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
