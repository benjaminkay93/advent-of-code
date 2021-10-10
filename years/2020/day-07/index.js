const SEARCH_BAG = ['shiny gold']

const fingHoldingBags = (input, searchTerm) => {
  const inputKeys = Object.keys(input)

  const containingArrays = []
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
      [hold]: contents,
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

const regex = /(\d+) ([\w]+ [\w]+)/

const fillArray = (value, length) => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(value)
  }
  return arr
}

const getContents = contents => {
  if (contents === "no other bags.") return []

  return contents.split(', ').reduce((acc, item) => {
    const [, num, color] = item.match(regex)

    return [
      ...acc,
      ...fillArray(color, num),
    ]
  }, [])
}

const partTwo = (input) => {
  const parsedInput = input.split('\n').reduce((acc, bag) => {
    const [hold, contents] = bag.split(' bags contain ')

    const parseContents = getContents(contents)

    return {
      ...acc,
      [hold]: [
        ...parseContents,
      ],
    }
  }, {})

  let count = 0

  const walkTree = (input, term) => {
    count = count + input[term].length
    input[term].forEach(bag => walkTree(input, bag))
  }

  walkTree(parsedInput, SEARCH_BAG)

  return count
}

module.exports = { partOne, partTwo }
