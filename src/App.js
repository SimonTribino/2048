import './App.css'

import React, { useState } from 'react'

import { useKeyPress } from './hooks/useKeyPress'

import Header from './components/Header'
import Score from './components/Score'
import BestScore from './components/BestScore'
import Board from './components/Board'
import Box from './components/Box'

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

const getRandomCoordinates = () => {
  const x = getRandomNumber(4)
  const y = getRandomNumber(4)
  return [x, y]
}

const getInitialBoard = () => {
  const [x1, y1] = getRandomCoordinates()
  const [x2, y2] = getRandomCoordinates()

  const board = [
    new Array(4).fill(0),
    new Array(4).fill(0),
    new Array(4).fill(0),
    new Array(4).fill(0),
  ]

  board[x1][y1] = 2
  board[x2][y2] = 2

  return board
}

const transpose = (matrix) => {
  let [row] = matrix
  return row.map((value, column) => matrix.map((row) => row[column]))
}

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

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [board, setBoard] = useState(getInitialBoard())

  const registerMove = (newBoard, newScore = 10) => {
    setScore(newScore)
    setBestScore(newScore > bestScore ? newScore : bestScore)
    setBoard(newBoard)
  }

  const handleKeyPress = (key) => {
    switch (key) {
      case 'ArrowDown':
        registerMove(transpose(transpose(board).reduce(mergeRight, [])))
        break
      case 'ArrowUp':
        registerMove(transpose(transpose(board).reduce(mergeLeft, [])))
        break
      case 'ArrowRight':
        registerMove(board.reduce(mergeRight, []))
        break
      case 'ArrowLeft':
        registerMove(board.reduce(mergeLeft, []))
        break

      default:
        break
    }
  }

  useKeyPress(handleKeyPress)

  const handleResetGame = () => {
    setScore(0)
    setBoard(getInitialBoard())
  }

  return (
    <div className="container">
      <Header onResetGame={handleResetGame}>
        <Score score={score}></Score>
        <BestScore bestScore={bestScore}></BestScore>
      </Header>
      <Board>
        {board.map((row) => row.map((box) => <Box value={box}></Box>))}
      </Board>
    </div>
  )
}

export default App
