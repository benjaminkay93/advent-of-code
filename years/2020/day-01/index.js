const TARGET = 2020

const partOne = (input) => {
  const preparedInput = input.split('\n').map(num => parseInt(num, 10))
  const preparedInputLength = preparedInput.length
  let num1
  let num2
  preparedInput.forEach((value, index) => {
    const subArray = preparedInput.slice(index, preparedInputLength)

    if (num1 || num2) return

    subArray.forEach(secondValue => {
      if (num1 || num2) return

      const computedValue = value + secondValue
      if (computedValue === TARGET) {
        num1 = value
        num2 = secondValue
      }
    })
  })

  return num1 * num2
}

const partTwo = (input) => {
  const preparedInput = input.split('\n').map(num => parseInt(num, 10))
  const preparedInputLength = preparedInput.length
  let num1
  let num2
  let num3
  preparedInput.forEach((value, index) => {
    if (num1 || num2 || num3) return
    const subArray = preparedInput.slice(index, preparedInputLength)

    subArray.forEach((secondValue, secondIndex) => {
      if (num1 || num2 || num3) return
      const subArrayTwo = subArray.slice(secondIndex, preparedInputLength)

      subArrayTwo.forEach(thirdValue => {
        if (num1 || num2 || num3) return

        const computedValue = value + secondValue + thirdValue
        if (computedValue === TARGET) {
          num1 = value
          num2 = secondValue
          num3 = thirdValue
        }
      })
    })
  })

  return num1 * num2 * num3
}

module.exports = { partOne, partTwo }
