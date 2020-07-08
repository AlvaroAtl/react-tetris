export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: '0, 0, 0, 0.3'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '32, 179, 212'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '29, 99, 251'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223, 173, 36'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '253, 255, 91'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '47, 245, 72'
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '141, 20, 216'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '236, 49, 49'
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'

    const randomTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)]

    return TETROMINOS[randomTetromino]
}