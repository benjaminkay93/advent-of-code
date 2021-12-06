const UNKNOWN = 'unknown';
const X = 'x';
const Y = 'y';

function* range(from, to) {
	const stepValue = to > from ? 1 : -1;
	let totalSteps = Math.abs(from - to) + 1;

	let value = from;
	while (totalSteps--) {
		yield value;
		value += stepValue;
	}
}

function* diagonalRange(x0, y0, x1, y1) {
	let stepValueX = x1 === x0 ? 0 : x1 > x0 ? 1 : -1;
	let stepValueY = y1 === y0 ? 0 : y1 > y0 ? 1 : -1;
	let totalStepsX = Math.abs(x0 - x1) + 1;
	let totalStepsY = Math.abs(y0 - y1) + 1;

	let totalSteps = Math.max(totalStepsX, totalStepsY);

	let x = x0;
	let y = y0;
	while (totalSteps--) {
		yield [x, y];
		x += stepValueX;
		y += stepValueY;
	}
}

const getLines = (array) => array.map(line => {
  return line.split(' -> ').reduce((acc, val, index) => {
    const [x, y] = val.split(',')

    let direction = UNKNOWN

    if (index === 0) {
      return {
        x0: parseInt(x, 10),
        y0: parseInt(y, 10),
        direction
      }
    }

    if (index === 1) {
      if (y == acc.y0) direction = X;
      if (x == acc.x0) direction = Y;

      return {
        ...acc,
        x1: parseInt(x, 10),
        y1: parseInt(y, 10),
        direction
      }
    }
  }, {})
})

const partOne = (input) => {
  const lines = getLines(input.split('\n')).filter(line => line.direction !== UNKNOWN)

  const intersections = {};

  lines.forEach(({x0, y0, x1, y1, direction}) => {
    if (direction === X) {
      for (let x of range(x0, x1)) {
        let count = intersections[`${x},${y1}`] || 0
        intersections[`${x},${y1}`] = count + 1
      }
    }
    if (direction === Y) {
      for (let y of range(y0, y1)) {
        let count = intersections[`${x1},${y}`] || 0
        intersections[`${x1},${y}`] = count + 1
      }
    }
  })

  return Object.values(intersections).filter(val => val > 1).length
}

const partTwo = (input) => {
  const lines = getLines(input.split('\n'))

  const intersections = {};

  lines.forEach(({x0, y0, x1, y1, direction}) => {
    if (direction === X) {
      for (let x of range(x0, x1)) {
        let count = intersections[`${x},${y1}`] || 0
        intersections[`${x},${y1}`] = count + 1
      }
    }
    if (direction === Y) {
      for (let y of range(y0, y1)) {
        let count = intersections[`${x1},${y}`] || 0
        intersections[`${x1},${y}`] = count + 1
      }
    }
    if (direction === UNKNOWN) {
      for (let [x, y] of diagonalRange(x0, y0, x1, y1)) {
        let count = intersections[`${x},${y}`] || 0
        intersections[`${x},${y}`] = count + 1
      }
    }
  })

  return Object.values(intersections).filter(val => val > 1).length
}

module.exports = { partOne, partTwo }
