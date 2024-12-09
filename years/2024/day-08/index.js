const partOne = (input) => {
  const data = input.split('\n').map(row => row.split(''))
  const nodes = {}

  const calcNodes = ({ x1, y1, x2, y2 }) => ([
    { x: x1 - (x2 - x1), y: y1 - (y2 - y1) },
    { x: x2 + (x2 - x1), y: y2 + (y2 - y1) },
  ])

  data.forEach((_, y1) => {
    data[y1].forEach((_, x1) => {
      if (data[y1][x1] === '.') return
      data.forEach((_, y2) => {
        data[y2].forEach((_, x2) => {
          if (x1 === x2 && y1 === y2) return
          if (data[y1][x1] === data[y2][x2]) {
            const [a1, a2] = calcNodes({ x1, y1, x2, y2 })
            if (data[a1.y]?.[a1.x]) (nodes[a1.y] ??= {})[a1.x] = 1
            if (data[a2.y]?.[a2.x]) (nodes[a2.y] ??= {})[a2.x] = 1
          }
        })
      })
    })
  })

  return Object.values(nodes).map(Object.keys).flat().length
}

const partTwo = (input) => {
  const data = input.split('\n').map(row => row.split(''))
  const nodes = {}

  const calcNodes = (x1, y1, cX, cY, deltaX = cX - x1, deltaY = cY - y1) => ([
    { x: x1 - deltaX, y: y1 - deltaY },
    { x: cX + deltaX, y: cY + deltaY },
  ])

  data.forEach((_, y1) => {
    data[y1].forEach((_, x1) => {
      if (data[y1][x1] === '.') return
      data.forEach((_, y2) => {
        data[y2].forEach((_, x2) => {
          if (x1 === x2 && y1 === y2) return
          if (data[y1][x1] === data[y2][x2]) {
            let [cX1, cY1, cX2, cY2] = [x1, y1, x2, y2]
            const deltaX = x2 - x1; const deltaY = y2 - y1;
            (nodes[y1] ??= {})[x1] = 1;
            (nodes[y2] ??= {})[x2] = 1

            while (data[cY1] || data[cY2]) {
              const [a1, a2] = calcNodes(cX1, cY1, cX2, cY2, deltaX, deltaY)
              if (data[a1.y]?.[a1.x]) (nodes[a1.y] ??= {})[a1.x] = 1
              if (data[a2.y]?.[a2.x]) (nodes[a2.y] ??= {})[a2.x] = 1;
              [cX1, cY1, cX2, cY2] = [a1.x, a1.y, a2.x, a2.y]
            }
          }
        })
      })
    })
  })

  return Object.values(nodes).map(Object.keys).flat().length
}

module.exports = { partOne, partTwo }
