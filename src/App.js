import './App.css'

import React, { useState } from 'react'

import { getRandomCoordinates } from './utils/board.utils'
import Header from './components/Header'
import Score from './components/Score'
import BestScore from './components/BestScore'
import Board from './components/board/Board'

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

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [board, setBoard] = useState(getInitialBoard())

  const handleResetGame = () => {
    setScore(0)
    setBoard(getInitialBoard())
  }

  const handleMove = (newBoard) => {
    const newScore = 10
    setScore(newScore)
    setBestScore(newScore > bestScore ? newScore : bestScore)
    setBoard(newBoard)
  }

  return (
    <div className="container">
      <Header onResetGame={handleResetGame}>
        <Score score={score}></Score>
        <BestScore bestScore={bestScore}></BestScore>
      </Header>
      <Board board={board} onMove={handleMove} />
    </div>
  )
}

export default App
