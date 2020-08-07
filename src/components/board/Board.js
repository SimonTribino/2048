import './board.css'

import React from 'react'

import {
  moveLeft,
  moveRight,
  moveDown,
  moveUp,
  addRandom,
} from '../../utils/board.utils'
import { useKeyPress } from '../../hooks/useKeyPress'

import Box from '../../components/Box'

export default function Board({ board, onMove }) {
  const handleKeyPress = (key) => {
    switch (key) {
      case 'ArrowDown':
        onMove(addRandom(moveDown(board)))
        break
      case 'ArrowUp':
        onMove(addRandom(moveUp(board)))
        break
      case 'ArrowRight':
        onMove(addRandom(moveRight(board)))
        break
      case 'ArrowLeft':
        onMove(addRandom(moveLeft(board)))
        break

      default:
        break
    }
  }

  useKeyPress(handleKeyPress)

  return (
    <div className="board">
      {board.map((row) =>
        row.map((box, index) => <Box key={index} value={box}></Box>)
      )}
    </div>
  )
}
