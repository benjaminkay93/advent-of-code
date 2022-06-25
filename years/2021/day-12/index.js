const isSmallCave = (cave) => cave.match(/^[a-z]+$/);

const findPathsPartOne = ({startPosition, endPosition, map, paths, currentPath}) => {
	currentPath[startPosition] = currentPath[startPosition] + 1 || 1;

  if (!map[startPosition]) return;
	if (startPosition === endPosition) {
		paths.push(currentPath);
		return;
	}

	for (const position of map[startPosition]) {
		if (isSmallCave(position) && currentPath?.[position]) {
			continue;
		}
		findPathsPartOne({startPosition: position, endPosition, map, paths, currentPath: {...currentPath}});
	}

	return paths;
}

const partOne = (input) => {
	const map = {};

  input.split('\n').forEach(line => {
    const [x, y] = line.split('-');

    map[x] ? map[x].push(y) : map[x] = [y];
    map[y] ? map[y].push(x) : map[y] = [x];
  })

  return findPathsPartOne({startPosition: 'start', endPosition: 'end', map, paths: [], currentPath: {}}).length
}


const findPathsPartTwo = ({map, startPosition, endPosition, paths, currentPath}) => {
	currentPath[startPosition] = currentPath[startPosition] + 1 || 1;

	if (isSmallCave(startPosition) && currentPath[startPosition] === 2) {
		currentPath['visited twice'] = true;
	}
  if (!map[startPosition]) return;
	if (startPosition === endPosition) {
		paths.push(currentPath);
		return;
	}


	for (const position of map[startPosition]) {
		if (isSmallCave(position) && position in currentPath) {
			if (['start', 'end'].includes(position) || currentPath['visited twice']) {
				continue;
			}
		}
		findPathsPartTwo({startPosition: position, endPosition, map, paths, currentPath: {...currentPath}});
	}

	return paths;
}

const partTwo = (input) => {
	const map = {};

  input.split('\n').forEach(line => {
    const [x, y] = line.split('-');

    map[x] ? map[x].push(y) : map[x] = [y];
    map[y] ? map[y].push(x) : map[y] = [x];
  })

  return findPathsPartTwo({startPosition: 'start', endPosition: 'end', map, paths: [], currentPath: {}}).length
}

module.exports = { partOne, partTwo }
