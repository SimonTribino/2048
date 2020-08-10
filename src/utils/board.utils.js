const sumRow = (row) => {
  const result = []
  let score = 0
  for (let y = 0; y < row.length; y++) {
    if (row[y] === row[y + 1]) {
      const newBox = row[y] + row[y + 1]
      y++
      result.push(newBox)
      score += newBox
    } else {
      result.push(row[y])
    }
  }
  return { result, score }
}

const transpose = (matrix) => {
  let [row] = matrix
  return row.map((_, column) => matrix.map((row) => row[column]))
}

const mergeRight = (row) => {
  const filteredRow = row.filter((box) => box > 0).reverse()
  const { result, score } = sumRow(filteredRow)
  const nextRow = [
    ...new Array(row.length - result.length).fill(0),
    ...result.reverse(),
  ]
  return { nextRow, score }
}

const mergeLeft = (row) => {
  const filteredRow = row.filter((box) => box > 0)
  const { result, score } = sumRow(filteredRow)
  const nextRow = [...result, ...new Array(row.length - result.length).fill(0)]
  return { nextRow, score }
}

const moveRight = (board) => {
  let scoreAcc = 0
  const movedBoard = board.map((row) => {
    const { nextRow, score } = mergeRight(row)
    scoreAcc += score
    return nextRow
  })
  const nextBoard = addRandom(movedBoard)
  return { nextBoard, scoreAcc }
}

const moveLeft = (board) => {
  let scoreAcc = 0
  const movedBoard = board.map((row) => {
    const { nextRow, score } = mergeLeft(row)
    scoreAcc += score
    return nextRow
  })
  const nextBoard = addRandom(movedBoard)
  return { nextBoard, scoreAcc }
}

const moveUp = (board) => {
  let scoreAcc = 0
  const transposedBoard = transpose(board)
  const movedTransposedBoard = transposedBoard.map((row) => {
    const { nextRow, score } = mergeLeft(row)
    scoreAcc += score
    return nextRow
  })
  const movedBoard = transpose(movedTransposedBoard)
  const nextBoard = addRandom(movedBoard)
  return { nextBoard, scoreAcc }
}

const moveDown = (board) => {
  let scoreAcc = 0
  const transposedBoard = transpose(board)
  const movedTransposedBoard = transposedBoard.map((row) => {
    const { nextRow, score } = mergeRight(row)
    scoreAcc += score
    return nextRow
  })
  const movedBoard = transpose(movedTransposedBoard)
  const nextBoard = addRandom(movedBoard)
  return { nextBoard, scoreAcc }
}

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

const getRandomPosition = (array) => array[getRandomNumber(array.length)]

const getRandomWeightedPosition = (array, weights) => {
  const r = Math.random()
  let acc = 0

  const finder = (_, idx) => {
    acc += weights[idx]
    return r <= acc
  }

  const value = array.find(finder)

  return value
}

const getEmptyCoordinates = (board) => {
  const cordinates = board
    .flatMap((rows, x) => {
      return rows.map((_, y) => ({ x, y }))
    })
    .filter(({ x, y }) => !board[x][y])

  return cordinates
}

const addRandom = (board) => {
  const { x, y } = getRandomPosition(getEmptyCoordinates(board))
  const value = getRandomWeightedPosition([2, 4], [0.9, 0.1])
  board[x][y] = value
  return board
}

const getCssCustomProperty = (property) => {
  const styles = getComputedStyle(document.documentElement)
  return styles.getPropertyValue(property)
}

const hexToRgb = (hex) => {
  hex = hex.trim()
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const red = parseInt(result[1], 16)
  const green = parseInt(result[2], 16)
  const blue = parseInt(result[3], 16)
  return `rgb(${red},${green},${blue})`
}

const interpolateColor = (initialColor, finalColor, factor = 0.5) => {
  var result = []
  initialColor.forEach((value, i) => {
    result.push(
      Math.round(initialColor[i] + factor * (finalColor[i] - initialColor[i]))
    )
  })
  return `rgb(${result.join(',')})`
}

const getinterpolatedColors = (initialColor, finalColor, steps) => {
  const stepFactor = 1 / (steps - 1)
  const initialColorRgbArray = initialColor.match(/\d+/g).map(Number)
  const finalColorRgbArray = finalColor.match(/\d+/g).map(Number)
  const result = []
  for (var i = 0; i < steps; i++) {
    let newColor = interpolateColor(
      initialColorRgbArray,
      finalColorRgbArray,
      stepFactor * i
    )
    result.push(newColor)
  }
  return result
}

const getBoxsColors = () => {
  const initialColor = hexToRgb(getCssCustomProperty('--initial-box-color'))
  const finalColor = hexToRgb(getCssCustomProperty('--final-box-color'))
  return getinterpolatedColors(initialColor, finalColor, 17)
}

export {
  transpose,
  moveRight,
  moveLeft,
  moveUp,
  moveDown,
  sumRow,
  addRandom,
  getRandomNumber,
  getCssCustomProperty,
  hexToRgb,
  interpolateColor,
  getinterpolatedColors,
  getBoxsColors,
}
