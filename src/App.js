import './App.css'

import React, { useState } from 'react'

import { addRandom, isAWin } from './utils/board.utils'
import Header from './components/Header'
import Score from './components/Score'
import BestScore from './components/BestScore'
import Board from './components/board/Board'
import GameOver from './components/gameOver/GameOver'
import Winner from './components/winner/Winner'

const getInitialBoard = () => {
  let board = [
    new Array(4).fill(0),
    new Array(4).fill(0),
    new Array(4).fill(0),
    new Array(4).fill(0),
  ]

  board = addRandom(addRandom(board))

  return board
}

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(false)

  const [board, setBoard] = useState(getInitialBoard())

  const handleResetGame = (disable = false) => {
    setScore(0)
    setBoard(getInitialBoard())
    if (disable || gameOver) {
      setGameOver(false)
    }
    if (disable || winner) {
      setWinner(false)
    }
  }

  const handleMove = ({ nextBoard, scoreAcc, canMakeMove }) => {
    const newScore = score + scoreAcc
    setScore(newScore)
    setBestScore(newScore > bestScore ? newScore : bestScore)
    setBoard(nextBoard)
    if (isAWin(nextBoard)) {
      setWinner(true)
    }
    if (!canMakeMove) {
      setGameOver(true)
    }
  }

  return (
    <div className="main-container">
      <Header onResetGame={handleResetGame}>
        <Score score={score}></Score>
        <BestScore bestScore={bestScore}></BestScore>
      </Header>
      <Board board={board} onMove={handleMove} />
      {gameOver && <GameOver onResetGame={handleResetGame} />}
      {winner && <Winner onResetGame={handleResetGame} />}
    </div>
  )
}

export default App
