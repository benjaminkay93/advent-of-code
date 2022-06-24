const segmentCount = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6,
}

const partOne = (input) => {
  const outputValues = input.split('\n').map(line => line.split(' | ')[1])
  return outputValues.reduce((acc, line) => {
    let countLine = 0;
    line.split(' ').forEach(output => {
      if (output.length === segmentCount[1]) countLine += 1
      if (output.length === segmentCount[4]) countLine += 1
      if (output.length === segmentCount[7]) countLine += 1
      if (output.length === segmentCount[8]) countLine += 1
    })
    return acc + countLine;
  }, 0)
}

const partTwo = (input) => {
  const numbers = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  }

  const segments = {
    a: null,
    b: null,
    c: null,
    d: null, 
    e: null,
    f: null,
    g: null,
  }
  
  const outputValues = input.split('\n').map(line => line.split(' | '))
  // determine the 4 segments we know
  // outputValues.forEach((acc, line) => {
  //   if (segments[1] && segments[4] && segments[7] && segments[8]) return;

  //   line.split(' ').forEach(output => {
  //     if (segments[1] && segments[4] && segments[7] && segments[8]) return;
  //     if (output.length === segmentCount[1]) segments[1] = output
  //     if (output.length === segmentCount[4]) segments[4] = output
  //     if (output.length === segmentCount[7]) segments[7] = output
  //     if (output.length === segmentCount[8]) segments[8] = output
  //   })
  // })

  const difference = (a, b) => a.filter(letter => !b.includes(letter)).concat(b.filter(letter => !a.includes(letter)));;

  return outputValues.reduce((acc, line) => {


    let startArray = line[0].split(' ');
    let endArray = line[1].split(' ');
    const lineNumbers = {...numbers};
    const lineSegments = {...segments};

    lineNumbers[1] = startArray.find(item => item.length === 2).split('')
    startArray = startArray.filter(word => word !== lineNumbers[1].join(''))

    lineNumbers[7] = startArray.find(item => item.length === 3).split('')
    startArray = startArray.filter(word => word !== lineNumbers[7].join(''))

    lineNumbers[4] = startArray.find(item => item.length === 4).split('')
    startArray = startArray.filter(word => word !== lineNumbers[4].join(''))

    lineNumbers[8] = startArray.find(item => item.length === 7).split('')
    startArray = startArray.filter(word => word !== lineNumbers[7].join(''))

    lineSegments.a = difference(lineNumbers[1], lineNumbers[7])[0];

    lineNumbers[9] = startArray.find(item => item.length === 6 && difference(item.split(''), lineNumbers[4]).length === 2).split('')
    startArray = startArray.filter(word => word !== lineNumbers[9].join(''))
 
    lineSegments.e = difference(lineNumbers[8], lineNumbers[9])[0];

    lineNumbers[0] = startArray.find(item => item.length === 6 && difference(item.split(''), lineNumbers[1]).length === 4).split('')
    startArray = startArray.filter(word => word !== lineNumbers[0].join(''))

    lineSegments.d = difference(lineNumbers[8], lineNumbers[0])[0];

    lineNumbers[6] = startArray.find(item => item.length === 6).split('')

    lineSegments.c = difference(lineNumbers[8], lineNumbers[6])[0];
    lineSegments.f = difference(lineNumbers[1], [lineSegments.c])[0];
    lineSegments.b = difference(lineNumbers[4], [lineSegments.c, lineSegments.d, lineSegments.f])[0];
    lineSegments.g = difference(lineNumbers[0], [lineSegments.a, lineSegments.b, lineSegments.c, lineSegments.e, lineSegments.f])[0];

    lineNumbers[2] = [lineSegments.a, lineSegments.c, lineSegments.d, lineSegments.e, lineSegments.g]
    lineNumbers[3] = [lineSegments.a, lineSegments.c, lineSegments.d, lineSegments.f, lineSegments.g]
    lineNumbers[5] = [lineSegments.a, lineSegments.b, lineSegments.d, lineSegments.f, lineSegments.g]

    const endNumbers = endArray.map(word => {
      const wordArray = word.split('');
      if (difference(lineNumbers[9], wordArray).length === 0) return 9;
      if (difference(lineNumbers[8], wordArray).length === 0) return 8;
      if (difference(lineNumbers[7], wordArray).length === 0) return 7;
      if (difference(lineNumbers[6], wordArray).length === 0) return 6;
      if (difference(lineNumbers[5], wordArray).length === 0) return 5;
      if (difference(lineNumbers[4], wordArray).length === 0) return 4;
      if (difference(lineNumbers[3], wordArray).length === 0) return 3;
      if (difference(lineNumbers[2], wordArray).length === 0) return 2;
      if (difference(lineNumbers[1], wordArray).length === 0) return 1;
      if (difference(lineNumbers[0], wordArray).length === 0) return 0;
    })

    return acc + parseInt(endNumbers.join(''), 10)
  }, 0)

  return outputValues[0]
}

module.exports = { partOne, partTwo }
