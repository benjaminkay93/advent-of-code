const partOne = (input, preamble) => {
  const parsedInput = input.split('\n')
  let tempArray = []
  let found = false;

  parsedInput.forEach((item, index) => {
    if (found) return
    if (index === 0) return
    
    for ( let i = 0; i < preamble; i++) {
        if (index-i < 0)return
        const newArray = parsedInput.subarray(index-preamble, index-1)
    }
  })
}

const partTwo = (input) => {}

module.exports = { partOne, partTwo }
