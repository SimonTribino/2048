const sumRow = (row) => {
  const result = []
  for (let y = 0; y < row.length; y++) {
    if (row[y] === row[y + 1]) {
      const newBox = row[y] + row[y + 1]
      y++
      result.push(newBox)
    } else {
      result.push(row[y])
    }
  }
  return result
}

const transpose = (matrix) => {
  let [row] = matrix
  return row.map((_, column) => matrix.map((row) => row[column]))
}

const mergeRight = (acc, row) => {
  const filteredRow = row.filter((box) => box > 0).reverse()
  const result = sumRow(filteredRow)
  const newBoard = [
    ...new Array(row.length - result.length).fill(0),
    ...result.reverse(),
  ]
  return [...acc, newBoard]
}

const mergeLeft = (acc, row) => {
  const filteredRow = row.filter((box) => box > 0)
  const result = sumRow(filteredRow)
  const newBoard = [...result, ...new Array(row.length - result.length).fill(0)]
  return [...acc, newBoard]
}

const moveRight = (board) => board.reduce(mergeRight, [])
const moveLeft = (board) => board.reduce(mergeLeft, [])
const moveUp = (board) => transpose(transpose(board).reduce(mergeLeft, []))
const moveDown = (board) => transpose(transpose(board).reduce(mergeRight, []))

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

const getRandomNumberFromArray = (array) =>
  array[Math.floor(Math.random() * Math.floor(array.lenght))]

const getRandomCoordinates = () => {
  const x = getRandomNumber(4)
  let y = getRandomNumber(4)
  while (x === y) {
    y = getRandomNumber(4)
  }
  return [x, y]
}

const getEmptyCoordinates = (board) => {
  const coordinates = (rows, x) => {
    return rows.map((_, y) => ({ x, y })).filter((_, y) => !rows[x][y])
  }
  return board.flatMap(coordinates)
}

const addRandom = (board) => {
  const firstCoordinate = getRandomNumberFromArray(getEmptyCoordinates(board))
  let secondCoordinate = getRandomNumberFromArray(getEmptyCoordinates(board))
  while (firstCoordinate === secondCoordinate) {
    secondCoordinate = getRandomNumberFromArray(getEmptyCoordinates(board))
  }
  return [firstCoordinate, secondCoordinate]
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
  getRandomCoordinates,
}
