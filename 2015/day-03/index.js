
const UP = '^'
const DOWN = 'v'
const RIGHT = '>'
const LEFT = '<'

const movement = {
    '^': 'UP',
    'v': 'DOWN',
    '>': 'RIGHT',
    '<': 'LEFT'
}

const partOne = (input) => {
    let x = 0
    let y = 0

    const visits = new Set()

    visits.add(`${x}${y}`)

    input.split('').forEach(item => {
        if(item === UP) y++
        if(item === DOWN) y--
        if(item === RIGHT) x++
        if(item === LEFT) x--

        visits.add(`${x}${y}`)
    })

    return visits.size
}

const partTwo = (input) => {
    let x = 0
    let y = 0

    let roboX = 0
    let roboY = 0

    const visits = new Set()

    visits.add(`${x}:${y}`)
    visits.add(`${roboX}:${roboY}`)

    const parsedInput = input.split('')
    parsedInput.map((item, index) => {

        if ( index % 2 === 1) {
            if(item === UP) y++
            if(item === DOWN) y--
            if(item === RIGHT) x++
            if(item === LEFT) x--

            visits.add(`${x}:${y}`)
            return
        }

        if ( index % 2 === 0) {
            if(item === UP) roboY++
            if(item === DOWN) roboY--
            if(item === RIGHT) roboX++
            if(item === LEFT) roboX--

            visits.add(`${roboX}:${roboY}`)
            return
        }
    })

    return visits.size
}

module.exports = { partOne, partTwo }
